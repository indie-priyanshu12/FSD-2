import './Contact.css'
export default function Contact() {
  return (
    <>
      <form>
        <h2>Contact Page</h2>
        <label>Full Name: </label>
        <input type="text" name="fullname" /><br /><br />
        <label>Phone: </label>
        <input type="tel" name="phone" /><br /><br />
        <label>Message: </label>
        <textarea name="message"></textarea><br /><br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}