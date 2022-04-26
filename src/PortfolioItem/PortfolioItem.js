import { Image, Modal, useMantineTheme } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
export const PortfolioItem = ({ image, images, description, title, imagePreview }) => {
  const theme = useMantineTheme();
  console.log(images);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;
  const { width: viewPortWidth } = useViewportSize();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const isMobile = viewPortWidth < 600;
  const modalSize = isMobile ? '100%' : '70%';
  return (
    <>
      <img
        src={imagePreview}
        className="portfolioItem"
        onClick={() => setModalOpen(true)}
        style={{ borderColor: theme.colors.sophieBackgroundTheme[0] }}
      />
      <Modal
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        closeOnClickOutside={true}
        size={modalSize}
        styles={{
          modal: {
            backgroundColor: theme.colors.sophieBackgroundTheme[0],
            color: theme.colors.sophieTextTheme[0]
          },
          close: { color: theme.colors.sophieTextTheme[0] }
        }}>
        <div className="modalBody">
          <div style={{ width: isMobile ? 'initial' : '50%' }}>
            <SwipeableViews index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
              {images.map((step, index) => (
                <div key={index}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    isMobile ? (
                      <div style={{ width: 300, marginLeft: 'auto', marginRight: 'auto' }}>
                        <Image radius="md" src={image} alt="Random unsplash image" />
                      </div>
                    ) : (
                      <div style={{ width: 600, marginLeft: 'auto', marginRight: 'auto' }}>
                        <Image radius="md" src={image} alt="Random unsplash image" />
                      </div>
                    )
                  ) : null}
                </div>
              ))}
            </SwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                  Next
                </Button>
              }
              backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                  Back
                </Button>
              }
            />
          </div>
          <div>
            <div
              style={{
                color: theme.colors.sophieMainTheme[0]
              }}>
              {title}
            </div>
            <div
              style={{
                color: theme.colors.sophieTextTheme[0]
              }}>
              {description}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

PortfolioItem.propTypes = {
  image: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  imagePreview: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string
};
