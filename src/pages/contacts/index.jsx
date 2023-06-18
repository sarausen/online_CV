import "./style.css"


export const ContactsPage = () => {
  return (
    <div  className="main">
     <div className="content_block">
        <h2>Contacts</h2>
        <p className="contacts_letter">You can sent me a letter right from here</p>
     <div className="contacts_block">
      <div className="contacts_email"> 
        <input className="contacts_input" type="text" placeholder="name" />
        <input className="contacts_input" type="email" placeholder="email" />
         <input className="contacts_file" type="file"  placeholder="file"/> 
        <textarea  name="" id="" cols="30" rows="10">Your message here...</textarea>
        <a href="mailto:smataeva09@gmail.com">
        <button className="contacts_button">Send message</button></a> 
     </div>
     <div className="contacts_a">
      <a href="https://www.linkedin.com/in/suusara-u-5a0270261/">
         <button className="contacts_button">Go to LinkedIn</button></a>
      <a href="tg://resolve?domain=M S">
         <button className="contacts_button"> Chat with Telegram</button></a>
      <a href="https://github.com/sarausen">
         <button className="contacts_button">Go to GitHub</button></a>
      <a href="https://www.behance.net/smataeva">
         <button className="contacts_button">Behance</button></a>
     <div className="contacts_contact">
      <p>Kyrgyz Republic, Bishkek</p>
      <p className="contacts_data">smataeva09@gmail.com</p>
      <p>+996 555 111 850</p>
     </div>
    </div>
   </div>
 </div>
</div>
  )
}