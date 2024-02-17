import Banner from "../../components/Banner";
import Card from "../../components/Cards";
import styles from './Home.module.css'
import Title from "../../components/Title";
import text from "../../json/db.json";

function Home () {
    return (
        <>
            
            <Banner imagem="home" />
            <Title>
                <h1>Places to visit in Ireland.</h1>
            </Title>
            <section className={styles.container}>
                {text.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
           
        </>
    )
}

export default Home;