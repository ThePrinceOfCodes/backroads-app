
import { tourArticles } from '../data';
import TourArticle from './TourArticle';

const Tours = () => {
    return (
        <>
            <section className="section" id="tours">
            <div className="section-title">
                <h2>featured <span>tours</span></h2>
            </div>

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