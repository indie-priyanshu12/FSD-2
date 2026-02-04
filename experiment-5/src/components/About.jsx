import './About.css'
export default function About() {
  return <>
    <form>
      <h2>About Page</h2>
      <label>Company Name: </label>
      <input type="text" name="company" /><br /><br />
      <label>Description: </label>
      <textarea name="description"></textarea><br /><br />
      <input type="submit" value="Submit" />
    </form>
  </>;
}
