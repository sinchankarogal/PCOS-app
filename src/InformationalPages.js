// InformationalPages.js
import React from 'react';
import './InformationalPages.css'; // Import CSS file

const InformationalPages = () => {
  return (
    <div className="information-container"> {/* Apply container class */}
      <h2>About PCOS</h2>
     
      {/* <img 
        src="https://www.pcoschallenge.org/wp-content/uploads/2015/03/pcos-awareness-infographic-pcos-challenge.jpg" 
        alt="Informational Image" 
        style={{ 
          width: '60%', 
          marginBottom: '100px', 
          display: 'block', 
          marginLeft: 'auto', 
          marginRight: 'auto' 
        }} 
      />  */}
      <div className="pcos-section">
        <div className="pcos-text">
          <h3>What is PCOS?</h3>
          <p>Polycystic ovary syndrome (PCOS) is a problem with hormones that happens during the reproductive years. If you have PCOS, you may not have periods very often. Or you may have periods that last many days. You may also have too much of a hormone called androgen in your body.

          With PCOS, many small sacs of fluid develop along the outer edge of the ovary. These are called cysts. The small fluid-filled cysts contain immature eggs. These are called follicles. The follicles fail to regularly release eggs.

          The exact cause of PCOS is unknown. Early diagnosis and treatment along with weight loss may lower the risk of long-term complications such as type 2 diabetes and heart disease.</p>
        </div>
        <div className="pcos-image">
          <img 
            src="https://my.clevelandclinic.org/-/scassets/images/org/health/articles/8316-polycystic-ovary-syndrome-pcos" 
            alt="Informational Image" 
          /> {/* Replace the URL with your image URL */}
        </div>
      </div>
      <div>
        <h3>Key Facts</h3>
        <p>Polycystic ovary syndrome (PCOS) affects an estimated 8–13% of reproductive-aged women. Up to 70% of affected women remain undiagnosed worldwide. PCOS is the commonest cause of anovulation and a leading cause of infertility. PCOS is associated with a variety of long-term health problems that affect physical and emotional wellbeing. PCOS runs in families, but there are ethnic variations in how PCOS manifests itself and how it affects people.</p>
      </div>
      <div>
        <h3>Overview</h3>
        <p>Polycystic ovary syndrome (PCOS) is a common hormonal condition that affects women of reproductive age. It usually starts during adolescence, but symptoms may fluctuate over time. PCOS can cause hormonal imbalances, irregular periods, excess androgen levels and cysts in the ovaries. Irregular periods, usually with a lack of ovulation, can make it difficult to become pregnant. PCOS is a leading cause of infertility. PCOS is a chronic condition and cannot be cured. However, some symptoms can be improved through lifestyle changes, medications and fertility treatments. The cause of PCOS is unknown but women with a family history or type 2 diabetes are at higher risk.</p>
      </div>
      <div>
        <h3>Scope of the Problem</h3>
        <p>PCOS a significant public health problem and is one of the commonest hormonal disturbances affecting women of reproductive age. The condition affects an estimated 8–13% of women of reproductive age, and up to 70% of cases are undiagnosed. The prevalence of PCOS is higher among some ethnicities and these groups often experience more complications, in particular related to metabolic problems. The biological and psychological effects of PCOS, particularly those related to obesity, body image and infertility, can lead to mental health challenges and social stigma.</p>
      </div>

        {/* Comparison of Cycles Section */}
        <div className="pcos-section">
        <div className="pcos-text">
          <h3>Comparison of Cycles</h3>
          <p>Polycystic ovary syndrome (PCOS) starkly contrasts with the orderly phases of a typical menstrual cycle. In a normal cycle, the follicular phase begins with menstruation, leading to follicular development and ovulation, followed by the luteal phase, marked by corpus luteum formation and progesterone secretion to prepare the uterus for potential pregnancy. PCOS disrupts this harmony with hormonal imbalances, notably elevated androgens and insulin resistance, leading to irregular follicular development and ovulation. This disruption results in irregular menstrual cycles, often accompanied by symptoms like hirsutism and acne. Moreover, PCOS heightens the risk of metabolic disorders, further complicating reproductive health and fertility.</p>
        </div>
        
        <div className="pcos-image">
          <img 
            // src="https://cdn.britannica.com/07/55707-050-5927EDFB/changes-woman-cycle.jpg?w=400&h=300&c=crop" 
            src="https://www.researchgate.net/profile/Preeti-Chouhan/publication/374754504/figure/fig1/AS:11431281198973590@1697511263099/Hormonal-changes-in-normal-menstruation-versus-PCOS-PCOS-Polycystic-ovarian-syndrome.png"
            alt="Comparison Image" 
          /> {/* Replace the URL with your image URL */}
        </div>
      </div>

      <div>
        <h3>Symptoms</h3>
        <img 
        src="https://cdn.shopify.com/s/files/1/0996/0350/files/PCOS_SYMPTOMS_002_large.jpg?v=1536942969" 
        alt="Informational Image" 
        style={{ 
          width: '40%', 
          marginBottom: '100px', 
          display: 'block', 
          marginLeft: 'auto', 
          marginRight: 'auto' 
        }} ></img>
        <p>Symptoms of polycystic ovary syndrome can differ from person to person. Symptoms may change over time and often occur without a clear trigger. Possible symptoms include heavy, long, intermittent, unpredictable or absent periods; infertility; acne or oily skin; excessive hair on the face or body; male-pattern baldness or hair thinning; weight gain, especially around the belly. People with PCOS are more likely to have other health conditions including type 2 diabetes, hypertension (high blood pressure), high cholesterol, heart disease, and endometrial cancer (cancer of the inner lining of the uterus). PCOS can also cause anxiety, depression and a negative body image. Some symptoms such as infertility, obesity and unwanted hair growth can lead to social stigma, affecting other life areas such as family, relationships, work and involvement in the community.</p>
      </div>
      <div>
        <h3>Diagnosis</h3>
        <p>Polycystic ovary syndrome is diagnosed by the presence of at least two out of the following: signs or symptoms of high androgens (unwanted facial or bodily hair, loss of hair from the head, acne or an elevated blood level of testosterone) – after other causes for this have been excluded; irregular or absent menstrual periods – after other causes for this have been excluded; and polycystic ovaries on an ultrasound scan. Blood tests can be used to identify characteristic changes in hormone levels, although these changes are not universal. Women with polycystic ovary syndrome may have elevated levels of testosterone, oestrogen, luteinising hormone (LH), insulin, and anti-müllerian hormone. Treatment: There is no cure for PCOS, but treatments can improve symptoms.</p>
      </div>
      <div>
        <h3>Treatment</h3>
        <p>People who have irregular periods, trouble getting pregnant or excessive acne and hair growth should speak to a healthcare professional. Some symptoms of PCOS can be reduced through lifestyle changes. Eating a healthy diet and getting enough exercise can help reduce weight and reduce the risk of type 2 diabetes. Birth control medicines (contraceptive pill) can help regulate the menstrual cycle and reduce symptoms. Other medicines can reduce acne or unwanted hair growth caused by PCOS. Treatments for infertility due to PCOS include lifestyle changes, medicines or surgery to stimulate regular ovulation. In-vitro fertilization (IVF) may be used but it has some risks.</p>
      </div>
    </div>
  );
};

export default InformationalPages;
