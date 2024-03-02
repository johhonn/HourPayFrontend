export default function contact() {
  return (
    <div className="contact">
        <h3>contact us</h3>
        <form>
            <label>
                <span>Your Email</span>
                <input type="email" name="email" required />
            </label>
            <label>
                <span>Your Message:</span>
                <input type="string" required></input>
            </label>
            <button>Submit</button>
        </form>
    </div>
  )
}
