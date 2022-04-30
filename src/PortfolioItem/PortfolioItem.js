import { Button, Image, Modal, useMantineTheme } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import MobileStepper from '@mui/material/MobileStepper';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

export const PortfolioItem = ({ image, images, description, title, imagePreview }) => {
  const theme = useMantineTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images ? images.length : 0;
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

  const renderInside = (imageToShow, imageFit, index) => {
    return isMobile ? (
      <Image key={index} src={imageToShow} height={200} alt="Failed Image" fit={imageFit} />
    ) : (
      <Image
        key={index}
        src={imageToShow}
        alt="Failed Image"
        width={600}
        height={400}
        fit={imageFit}
      />
    );
  };
  const modalSize = isMobile ? '100%' : '70%';
  return (
    <>
      <Image
        radius="md"
        src={imagePreview}
        onClick={() => setModalOpen(true)}
        style={{ borderColor: theme.colors.sophieBackgroundTheme[0] }}
        fit="contain"
      />
      <Modal
        opened={modalOpen}
        onClose={() => {
          handleStepChange(0);
          setModalOpen(false);
        }}
        closeOnClickOutside={true}
        size={modalSize}
        centered={true}
        styles={{
          root: { color: 'red' },
          modal: {
            backgroundColor: theme.colors.sophieBackgroundTheme[0],
            color: theme.colors.sophieTextTheme[0]
          },
          close: { color: theme.colors.sophieTextTheme[0] }
        }}>
        <div className="modalBody">
          <div style={{ width: isMobile ? 'initial' : '600px' }}>
            {maxSteps === 0 ? (
              renderInside(image.imageToShow, image.imageFit)
            ) : (
              <>
                <SwipeableViews
                  index={activeStep}
                  onChangeIndex={handleStepChange}
                  enableMouseEvents>
                  {images.map(({ imageToShow, imageFit }, index) => (
                    <>
                      {Math.abs(activeStep - index) <= 2
                        ? renderInside(imageToShow, imageFit, index)
                        : null}
                    </>
                  ))}
                </SwipeableViews>
                <MobileStepper
                  steps={maxSteps}
                  position="static"
                  activeStep={activeStep}
                  nextButton={
                    <Button
                      radius="md"
                      size="xs"
                      sx={(theme) => ({
                        backgroundColor: theme.colors.sophieMainTheme[0],
                        '&:hover': {
                          backgroundColor: theme.colors.sophieMainTheme[0]
                        }
                      })}
                      onClick={handleNext}
                      disabled={activeStep === maxSteps - 1}>
                      Next
                    </Button>
                  }
                  backButton={
                    <Button
                      radius="md"
                      size="xs"
                      sx={(theme) => ({
                        backgroundColor: theme.colors.sophieMainTheme[0],
                        '&:hover': {
                          backgroundColor: theme.colors.sophieMainTheme[0]
                        }
                      })}
                      onClick={handleBack}
                      disabled={activeStep === 0}>
                      Back
                    </Button>
                  }
                />
              </>
            )}
          </div>
          <div className="itemTextContainer">
            <div
              className="itemTitle"
              style={{
                color: theme.colors.sophieMainTheme[0]
              }}>
              {title}
            </div>
            <div
              className="itemDescription"
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
  image: PropTypes.shape({
    imageToShow: PropTypes.string,
    imageFit: PropTypes.string
  }),
  images: PropTypes.arrayOf(
    PropTypes.shape({
      imageToShow: PropTypes.string,
      imageFit: PropTypes.string
    })
  ),
  imageFit: PropTypes.string,
  imagePreview: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string
};
