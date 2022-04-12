import { useMantineTheme } from '@mantine/core';
import yonderPreview from '../images/yonderweb-preview.png';
import yonder from '../images/yonderweb.png';
import { PortfolioItem } from '../PortfolioItem/PortfolioItem.js';
export const Portfolio = () => {
  const theme = useMantineTheme();

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
          image={yonder}
          title="YONDER"
          description="Goodness this yonder project was bussin, there is some respecting levels of bussin bussin and that toll house cookie dough made me say AY YO MR JOE BIDEN W+TAKE ME OUT TO LINNER"
        />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />

        <div>asd</div>
        <div>asd</div>
        <div>asd</div>
        <div>asd</div>
      </div>
    </>
  );
};
