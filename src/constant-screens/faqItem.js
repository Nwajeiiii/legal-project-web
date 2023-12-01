function FAQItem( { question, answer} ) {
 return (
   <div
     style={{
       marginBottom: "30px",
     }}
     data-aos="flip-right"
   >
     <div
       style={{
         backgroundColor: "#10172C",
         color: "white",
         fontSize: "24px",
         fontWeight: "bold",
         padding: "20px",
         textAlign: "center",
       }}
       data-aos="flip-left"
     >
       <p data-aos="fade-up">{question}</p>
     </div>
     <div
       style={{
         border: "1px solid #10172C",
         color: "#10172C",
         fontSize: "18px",
         fontStyle: "italic",
         lineHeight: "2.0",
         padding: "20px",
       }}
       data-aos="flip-left"
     >
       <p data-aos="fade-down">{answer}</p>
     </div>
   </div>
 );
}

export default FAQItem;