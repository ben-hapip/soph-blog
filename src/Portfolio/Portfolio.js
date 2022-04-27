import { useMantineTheme } from '@mantine/core';
import candlePreview from '../images/candle/candle-preview.jpg';
import candle1 from '../images/candle/candle1.jpg';
import candle2 from '../images/candle/candle2.jpg';
import candle3 from '../images/candle/candle3.jpg';
import candle4 from '../images/candle/candle4.jpg';
import candle5 from '../images/candle/candle5.jpg';
import candle6 from '../images/candle/candle6.jpg';
import foodPreview from '../images/food/food-preview.jpg';
import food from '../images/food/food.jpg';
import infographicPreview from '../images/infographic/infographic-preview.jpg';
import infographic from '../images/infographic/infographic.jpg';
import magPreview from '../images/mag/mag-preview.jpg';
import magImage from '../images/mag/mag.jpg';
import panoPreview from '../images/pano/pano-preview.jpg';
import pano from '../images/pano/pano.jpg';
import panoCropped from '../images/pano/panocropped.jpg';
import phonePreview from '../images/phone/phone-preview.jpg';
import phone1 from '../images/phone/phone1.jpg';
import phone2 from '../images/phone/phone2.jpg';
import posterPreview from '../images/poster/poster-preview.jpg';
import poster from '../images/poster/poster.jpg';
import socialPreview from '../images/social/social-preview.jpg';
import social1 from '../images/social/social1.jpg';
import social2 from '../images/social/social2.png';
import social3 from '../images/social/social3.png';
import sparqPreview from '../images/sparq/sparq-preview.jpg';
import sparq1 from '../images/sparq/sparq1.jpg';
import sparq2 from '../images/sparq/sparq2.jpg';
import sparq3 from '../images/sparq/sparq3.jpg';
import yonderPreview from '../images/yonder/yonder-preview.jpg';
import yonder1 from '../images/yonder/yonder1.jpg';
import yonder2 from '../images/yonder/yonder2.jpg';
import yonder3 from '../images/yonder/yonder3.jpg';
import yonder4 from '../images/yonder/yonder4.jpg';
import { PortfolioItem } from '../PortfolioItem/PortfolioItem.js';

export const Portfolio = () => {
  const theme = useMantineTheme();
  const yonderImages = [yonder1, yonder2, yonder3, yonder4];
  const sparqImages = [sparq1, sparq2, sparq3];
  const phoneImages = [phone1, phone2];
  const panoImages = [panoCropped, pano];
  const candleImages = [candle1, candle2, candle3, candle4, candle5, candle6];
  const socialImage = [social1, social2, social3];
  //  TODO: PROBABLY WANT TO MAKE OBJECTS FOR EACH ITEM IN HERE TO BE ABLE TO HANDLE AND OBJECT FIT PER IMAGE......
  return (
    <>
      <div
        className="header"
        style={{
          color: theme.colors.sophieMainTheme[0]
        }}>
        PORTFOLIO
      </div>
      <div className="portfolio-container">
        <PortfolioItem
          imagePreview={yonderPreview}
          images={yonderImages}
          title="BRANDING"
          description="This project required us to promote our brand through a marketing campaign. I took my Yonder logo and came up with the tagline, “Bring the adventure home with you”. I wanted the campaign to encompass the word Yonder, the scents of the candles, and the love of adventuring and the outdoors, which is what the candle company is all about."
          imageFit="cover"
        />
        <PortfolioItem
          imagePreview={sparqPreview}
          images={sparqImages}
          title="APP DESIGN"
          description="I designed this fictitious company for an app design project. The purpose of the app is to transfer battery life from one phone to another while both are using the app. I designed the app using Apple's standards."
          imageFit="contain"
        />
        <PortfolioItem
          imagePreview={phonePreview}
          images={phoneImages}
          title="PRODUCT ILLUSTRATION"
          description="This phone is truly the most rewarding piece I have done. I created this in Illustrator. The assignment was to use gradients to make a realistic product illustration. With the use of myriad gradients, I believe this phone looks extremely realistic."
          imageFit="contain"
        />
        <PortfolioItem
          imagePreview={magPreview}
          image={magImage}
          title="MAGAZINE SPREAD"
          description="Our assignment was to create a magazine spread about ourselves for a group project. The spread had to stay consistent to the overall theme of the magazine while also portraying who we are and showcasing our best pieces. "
          imageFit="cover"
        />
        <PortfolioItem
          imagePreview={infographicPreview}
          image={infographic}
          title="INFOGRAPHIC"
          description="For this project, we had to create a poster to explain something in graphic form. I made this infographic to show how plastic pollution is affecting our oceans. I wanted to keep it simple and minimal so the information is easy to understand and more impactful."
          imageFit="cover"
        />
        <PortfolioItem
          imagePreview={panoPreview}
          images={panoImages}
          title="PANORAMA"
          description="We were tasked with taking a panoramic photo of our choice. When thinking of an idea for my panorama I decided to go to the annual Balloon Festival in Medora, and I spent the morning taking photos of the beautiful hot air balloons as they took off. The colors against the backdrop of the Badlands help the photo come alive."
          imageFit="contain"
        />
        <PortfolioItem
          imagePreview={candlePreview}
          images={candleImages}
          title="BRAND PACKAGING"
          description="Package design is a huge influencer of why we purchase items. My goal was to create an eye-catching design that would stand out from the others while also maintaining the branding of the product. The colors and graphic elements help reinforce this idea."
          imageFit="cover"
        />
        <PortfolioItem
          imagePreview={foodPreview}
          image={food}
          title="FOOD PHOTOGRAPHY"
          description="I’m proud of this photograph because I feel it sells the product. The lighting and clarity make the smoothie bowl alluring as well as appealing. It makes a consumer almost taste the goodness of the contents and crave a smoothie bowl."
          imageFit="cover"
        />
        <PortfolioItem
          imagePreview={posterPreview}
          image={poster}
          title="SPRING SHOW POSTER"
          description="I wanted to portray a magical and lively design to encourage students, faculty and community members to attend our spring show. I chose a playful design because I love graphic design and hoped to incorporate how it makes me feel. I was happy with the positive vibe the poster sent."
          imageFit="cover"
        />
        <PortfolioItem
          imagePreview={socialPreview}
          images={socialImage}
          title="SOCIAL MEDIA MAGAGEMENT"
          description="I created engaging social media content for Evangel Church in Bismarck, North Dakota. I executed Evangel’s social media presence on both Instagram and Facebook. While working for Evangel, I used and became familiar with the CoSchedule Marketing Calendar. I worked with the creative team to ensure the style and feel of Evangel’s brand was conveyed on all platforms."
          imageFit="contain"
        />
      </div>
    </>
  );
};
