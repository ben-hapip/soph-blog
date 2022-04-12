import { useMantineTheme } from '@mantine/core';
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
        <PortfolioItem />
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
