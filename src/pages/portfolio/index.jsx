import "./style.css"
export const PortfolioPage = () => {
  return (
    <div className="main">
       <div className="content_block">
        <h2>My Portfolio</h2>
        <div className="portfolio_block">
           <div className="portfolio_bl">
             <img className="portfolio_img" src="https://hozyindachi.ru/wp-content/uploads/2018/03/redizajn-sajta.jpg" alt="" />
          </div>
          <div>
            <h4>Heart in paws</h4>
            <p className="portfolio_project">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
            <a className="githud" href="https://github.com/sparrowkg/animal-shelter">https://github.com/sarausen</a>
          </div>
        </div>
        <div className="portfolio_block">
           <div  className="portfolio_bl">
              <img className="portfolio_img" src="https://vkmonstr.ru/wp-content/uploads/2020/01/%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81-%D0%B8%D0%B7%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-%D1%81%D0%B0%D0%B9%D1%82%D0%B0.jpg" alt="" />
          </div>
          <div>
            <h4>Timer</h4>
            <p className="portfolio_project">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
            <a className="githud" href="https://github.com/sarausen/DOMGallery">https://github.com/sarausen</a>
          </div>
        </div>
       </div>
      </div>
  )
}