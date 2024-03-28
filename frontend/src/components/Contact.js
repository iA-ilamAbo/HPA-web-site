import React from "react";


function Contact() {
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

        <button type="submit">Submit Form</button>
        

      </form>
      <span>{result}</span>
      <section class="elementor-section elementor-top-section elementor-element elementor-element-88b952d elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="88b952d" data-element_type="section">
    <div class="elementor-container elementor-column-gap-default">
        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3649d36" data-id="3649d36" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
                <div class="elementor-element elementor-element-3d4cd06 elementor-widget elementor-widget-heading" data-id="3d4cd06" data-element_type="widget" data-widget_type="heading.default">
                    <div class="elementor-widget-container">
                        <h2 class="elementor-heading-title elementor-size-default">Comment Nous Trouver!</h2>
                    </div>
                </div>
                <div class="elementor-element elementor-element-95b0470 elementor-widget elementor-widget-shortcode" data-id="95b0470" data-element_type="widget" data-widget_type="shortcode.default">
                    <div class="elementor-widget-container">
                        <div class="elementor-shortcode">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13300.804773486385!2d-7.5864713!3d33.5481486!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda632c6dae0393b%3A0x11f4e779fb482f79!2sBouchra%20Pi%C3%A8ces%20Autos!5e0!3m2!1sfr!2sma!4v1701963868100!5m2!1sfr!2sma" width="600" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  );
}

export default Contact;
