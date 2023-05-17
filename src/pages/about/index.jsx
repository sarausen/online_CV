import "./style.css"

export const AboutPage = () => {
  return (
    <div className='main'>
      <div className="content_block">
        <h2>About me</h2>
        <p className="about_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, </p>
        <img className="about_img" src="https://images.pexels.com/photos/6347912/pexels-photo-6347912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        <p className="about_text">
I enjoy working on interesting and challenging projects. I have experience both working in teams and independently. I have a strong desire and determination to develop my skills in frontend development.</p>
      </div>
    </div>
  )
}