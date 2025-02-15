import { ArticleCard } from '../components'

const Article = () => {
    const articles = [
        {
            title: "Tips pencegahan “Stunting” pada anak Anda",
            description: "Stunting adalah kondisi kekurangan gizi kronis yang menyebabkan anak memiliki tinggi badan lebih rendah dibandingkan standar usianya. Kondisi ini tidak hanya memengaruhi pertumbuhan fisik, tetapi juga perkembangan otak anak, yang dapat berdampak pada kemampuan belajar dan produktivitas di masa depan.",
            link: "https://example.com",
            image: "https://placehold.co/100"
        }
    ]

    return (
        <div className='lg:m-28 m-10'>
            {
                articles.map((article, index) => (
                    <ArticleCard key={index} {...article} />
                ))
            }
        </div>
    )
}

export default Article