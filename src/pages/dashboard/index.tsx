import styles from './styles.module.css';
import Head from "next/head";
import type { GetServerSideProps } from "next";

import { getSession } from "next-auth/react";
import { Textarea } from '../../components/textarea';
import { FiShare2 } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { db } from '../../services/firebaseConnection';
import { collection, addDoc, query, where, orderBy, onSnapshot } from 'firebase/firestore';

interface HomeProps {
    user: {
        email: string;
    }
}

interface TaskProps {
    id: string;
    created: Date;
    public: boolean;
    tarefa: string;
    user: string;
}

export default function Dashboard({user}: HomeProps) {
    const [input, setInput] = useState('');
    const [publicTask, setPublicTask] = useState(false);
    const [tasks, setTasks] = useState<TaskProps[]>([]);

    useEffect(() => {
        async function loadTasks() {
            const tarefasRef = collection(db, "tarefas");
            const q = query(tarefasRef, where("user", "==", user?.email), orderBy("created", "desc"));
            onSnapshot(q, (snapshot) => {
                let lista = [] as TaskProps[];
                snapshot.forEach((doc) => {
                    lista.push({
                        id: doc.id,
                        created: doc.data().created,
                        public: doc.data().public,
                        tarefa: doc.data().tarefa,
                        user: doc.data().user
                    });
                });
                setTasks(lista);  
            });
        }
        loadTasks();
    }, [user?.email]);

    function handleChangePublicTask(event: React.ChangeEvent<HTMLInputElement>) {
        setPublicTask(event.target.checked);
    }

    async function handleRegisterTask(event: React.FormEvent) {
        event.preventDefault();
        // Lógica para registrar a tarefa
        console.log("Entrou no handleRegisterTask");
        if (input === "") {
            return;
        }

        try {
            console.log("Entrou no handleRegisterTask try");
            await addDoc(collection(db, "tarefas"), {
                tarefa: input,
                public: publicTask,
                created: new Date(),
                user: user?.email
            }).catch((error) => {
                console.log(`Error no addDoc: ${error}`);
            });
            setInput('');
            setPublicTask(false);
        } catch (error) {
            console.log(`Error no handleRegisterTask: ${error}`);
        }
    }
    
    return (
        <div className={styles.container}>
            <Head>
                <title>Meu painel de tarefas</title>
            </Head>

            <main className={styles.main}>
                <section className={styles.content}>
                    <div className={styles.contentForm}>
                        <h1 className={styles.title}>Qual sua tarefa?</h1>
                        <form onSubmit={handleRegisterTask}>
                            <Textarea 
                                placeholder="Digite qual sua tarefa..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <div className={styles.checkboxAre}>
                                <input 
                                    type='checkbox'
                                    className={styles.checkbox}  
                                    checked={publicTask}
                                    onChange={handleChangePublicTask}
                                />
                                <label>Deixar tarefa pública?</label>
                            </div>
                            <button className={styles.button} type="submit">
                                Registrar
                            </button>
                        </form>
                    </div>
                </section>

                <section className={styles.taskContainer}>
                    <h1>Minhas tarefas</h1>
                    {tasks.map((task) => (
                        <article key={task.id} className={styles.task}>
                            {task.public && (
                                <div className={styles.tagContainer}>
                                    <label className={styles.tag}>PUBLICADO</label>
                                    <button className={styles.shareButton}>
                                        <FiShare2
                                            size={22}
                                            color="#3183ff"
                                        />
                                    </button>
                                </div>
                            )}
                            <div className={styles.taskContent}>
                                <p>{task.tarefa}</p>
                                <button className={styles.trashButton}>
                                    <FaTrash
                                        size={24}
                                        color="#ea3140"
                                    />
                                </button>
                            </div>
                        </article>
                    ))}
                </section>
            </main>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({req}) => {

    const session = await getSession({req});

    if(!session?.user) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        }
    }

    return {
        props: {
            user: {
                email: session?.user?.email,
            }
        }
    }
}