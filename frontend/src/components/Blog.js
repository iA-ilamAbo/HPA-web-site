import React from "react";


export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3aef5062-33f5-4947-9aeb-2a09094c1b70");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form  style={{display:"flex", flexDirection:"column",}} onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="entrer votre nom" required/>
        <input type="email" name="email" placeholder="entrer votre email" required/>
        <textarea name="message" placeholder="taper votre message" required></textarea>
        <button type="submit">Envoyer votre email</button>
      </form>
      <span>{result}</span>
      </div>
  )
}
