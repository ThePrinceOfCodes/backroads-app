
import { tourArticles } from '../data';
import Title from './Title';
import TourArticle from './TourArticle';

const Tours = () => {
    return (
        <>
            <section className="section" id="tours">
                <Title title="featured" subTitle="tours"/>
           
            <div className="section-center featured-center">
                { tourArticles.map((article) => {
                    return (
                        <TourArticle {...article} key={article.id} />
                    )
                })}
                               
            </div>
            </section>
        </>
    )
}

export default Tours