import Banner from 'components/Banner';
import styles from './Places.module.css';
import Title from 'components/Title';
import { useParams } from 'react-router-dom';
import texts from "../../json/db.json";

function Places () {
    const parameters = useParams();
    const text = texts.find((text) => {
        return text.id === Number(parameters.id);
    });
    return (
        <>
            <Banner imagem='home' />
            <Title>
                <h1>
                    {text.title}
                </h1>
            </Title>
            <section className={styles.container}>
                <div className={styles.description}>
                    {text.description}
                </div>  
            <iframe 
            width="100%" 
            height="100%" 
            src={text.link}
            title={text.title} 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                
            </section>

        </>
    )
}

export default Places;
