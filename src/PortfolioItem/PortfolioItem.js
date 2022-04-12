import { Modal, useMantineTheme } from '@mantine/core';
import { PropTypes } from 'prop-types';
import { useState } from 'react';

export const PortfolioItem = ({ image, description, title, imagePreview }) => {
  const theme = useMantineTheme();
  const [modalOpen, setModalOpen] = useState(false);
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
        size="70%"
        styles={{
          modal: {
            backgroundColor: theme.colors.sophieBackgroundTheme[0],
            color: theme.colors.sophieTextTheme[0]
          },
          close: { color: theme.colors.sophieTextTheme[0] }
        }}>
        <div className="modalBody">
          <img src={image} width={500} height={500} />
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
  imagePreview: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string
};
