import "./style.css"

export const ContactsPage = () => {
  return (
    <div  className="main">
     <div className="content_block">
        <h2>Contacts</h2>
        <p className="contacts_letter">You can sent me a letter right from here</p>
     <div className="contacts_block">
      <div className="contacts_email"> 
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
        {/* <input className="contacts_file" type="file"  placeholder="file"/> */}
        <textarea name="" id="" cols="30" rows="10">Your message here...</textarea>
        <a href="mailto:smataeva09@gmail.com">
        <button>Send message</button></a>
     </div>
     <div className="contacts_a">
      <a href="https://www.linkedin.com/in/S Mataeva/">
         <button>Go to LinkedIn</button></a>
      <a href="tg://resolve?domain=M S">
         <button>Chat with Telegram</button></a>
      <a href="https://github.com/suusara">
         <button>Go to GitHub</button></a>
     <div className="contacts_contact">
      <p>Kyrgyz Republic, Bishkek</p>
      <p>smataeva09@gmail.com</p>
      <p>+996 555 111 850</p>
     </div>
    </div>
   </div>
 </div>
</div>
  )
}