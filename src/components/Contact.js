const Contact = () => {
  return (
    <div className="edrea_tm_section" id="contact">
      <div className="section_inner" style={{ maxWidth: '100%' }}>
        <div className="edrea_tm_contact w-full h-auto flex flex-col justify-center text-center">
          <div className="edrea_tm_main_title mt-20" style={{ border: 'none' }}>
            <h3>
              support<span className="text-pink-color" >@bufferleaf.se</span>
            </h3>
          </div>

          <div className="wrapper w-full h-auto flex justify-center pt-[60px]">
            {/* <div className="left w-1/2 pr-[50px]">
              <ul className="m-0 list-none">
                <li className="mb-[20px] w-full float-left">
                  <div className="list_inner w-full h-auto clear-both float-left relative bg-[#222] rounded-[10px] p-[10px]">
                    <i className="icon-location text-pink-color text-[16px] absolute left-[20px] top-1/2 mt-[1px] translate-y-[-50%]" />
                    <span className="inline-block pl-[48px]">
                      <a
                        href="#"
                        className="href_location text-white-color transition-all duration-300 hover:text-pink-color"
                      >
                        Avon str. 22, NYC, USA
                      </a>
                    </span>
                  </div>
                </li>
                <li className="mb-[20px] w-full float-left">
                  <div className="list_inner w-full h-auto clear-both float-left relative bg-[#222] rounded-[10px] p-[10px]">
                    <i className="icon-phone text-pink-color text-[16px] absolute left-[20px] top-1/2 mt-[1px] translate-y-[-50%]" />
                    <span className="inline-block pl-[48px]">
                      <a
                        href="#"
                        className="text-white-color transition-all duration-300 hover:text-pink-color"
                      >
                        +77 022 155 02 02
                      </a>
                    </span>
                  </div>
                </li>
                <li className="mb-[20px] w-full float-left">
                  <div className="list_inner w-full h-auto clear-both float-left relative bg-[#222] rounded-[10px] p-[10px]">
                    <i className="icon-mail-1 text-pink-color text-[16px] absolute left-[20px] top-1/2 mt-[1px] translate-y-[-50%]" />
                    <span className="inline-block pl-[48px]">
                      <a
                        href="mailto:example@gmail.com"
                        className="text-white-color transition-all duration-300 hover:text-pink-color"
                      >
                        example@gmail.com
                      </a>
                    </span>
                  </div>
                </li>
                <li className="w-full float-left">
                  <div className="list_inner w-full h-auto clear-both float-left relative bg-[#222] rounded-[10px] p-[10px]">
                    <i className="icon-facebook-rect text-pink-color text-[16px] absolute left-[20px] top-1/2 mt-[1px] translate-y-[-50%]" />
                    <span className="inline-block pl-[48px]">
                      <a
                        href="https://www.facebook.com"
                        className="text-white-color transition-all duration-300 hover:text-pink-color"
                      >
                        @facebookNick
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </div> */}
            {/* <div className=" ">
              <div className="fields w-full h-auto clear-both float-left">
                <form
                  action="/"
                  method="post"
                  className="contact_form"
                  id="contact_form"
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div className="first w-full float-left mb-[20px]">
                    <ul className="ml-[-20px] list-none">
                      <li className="m-0 w-1/2 pl-[20px] float-left">
                        <div className="list_inner w-full h-auto clear-both float-left bg-[#222] rounded-[10px]">
                          <input
                            className="w-full h-[45px] bg-transparent border-none text-main-color p-[20px] font-poppins"
                            id="name"
                            type="text"
                            placeholder="Namn"
                            autoComplete="off"
                          />
                        </div>
                      </li>
                      <li className="m-0 w-1/2 pl-[20px] float-left">
                        <div className="list_inner w-full h-auto clear-both float-left bg-[#222] rounded-[10px]">
                          <input
                            className="w-full h-[45px] bg-transparent border-none text-main-color p-[20px] font-poppins"
                            id="email"
                            type="text"
                            placeholder="Email"
                            autoComplete="off"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="last w-full float-left bg-[#222] rounded-[10px] mb-[20px]">
                    <textarea
                      className="w-full h-[108px] bg-transparent border-none text-main-color resize-none p-[20px] font-poppins"
                      id="message"
                      placeholder="Meddelande"
                      defaultValue={""}
                    />
                  </div>
                  <div className="edrea_tm_button">
                    <a style={{ color: "black" }} id="send_message" href="#">
                      Skicka meddelande
                    </a>
                  </div>
                </form>
              </div>
            </div> */}
          </div>
          <div className="faq_section text-left">
            <h3>Vanliga frågor och svar</h3>
            <div className="faq_item">
              <h4>Min kommun finns inte...</h4>
              <p>Kontakta då oss eller be din förälder / fritidsledare att skriva så gör vi vad vi kan. Målet är att alla ungdomar i Sverige ska ha tillgång till en plats online</p>
            </div>
            <div className="faq_item">
              <h4>Hur kan jag kontakta er om jag har frågor eller behöver stöd?</h4>
              <p>Du kan alltid kontakta vårt supportteam via e-post på support@digitalfritidsgard.se. Vi finns här för att hjälpa dig med alla dina frågor och bekymmer.</p>
            </div>
            <div className="faq_item">
              <h4>Vad är en digital fritidsgård?</h4>
              <p>En digital fritidsgård är en onlineplattform där unga människor kan delta i olika aktiviteter, interagera med andra och få stöd och vägledning från ledare och mentorer.</p>
            </div>
            <div className="faq_item">
              <h4>Hur kan jag ansluta till er digitala fritidsgård?</h4>
              <p>Det är enkelt, du loggar in via din kommuns inlogg t ex BankId eller skolinlogg.</p>
            </div>
            <div className="faq_item">
              <h4>Vilka typer av aktiviteter erbjuder ni?</h4>
              <p>Vi erbjuder en rad olika aktiviteter, inklusive onlinespel, workshops, kreativa projekt, och mycket mer. Du kan välja det som intresserar dig mest.</p>
            </div>
            <div className="faq_item">
              <h4>Finns det någon åldersgräns för att delta?</h4>
              <p>Vår digitala fritidsgård är främst riktad till ungdomar och tonåringar. Vanligtvis välkomnar vi medlemmar i åldrarna 12 till 25 år, men åldersgränser kan variera.</p>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
