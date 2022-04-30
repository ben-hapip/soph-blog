import emailjs from '@emailjs/browser';
import {
  Box,
  Group,
  Notification,
  Textarea,
  TextInput,
  ThemeIcon,
  useMantineTheme
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useViewportSize } from '@mantine/hooks';
import { useRef, useState } from 'react';
import { BrandInstagram, BrandLinkedin, Check, X } from 'tabler-icons-react';
export const Contact = () => {
  const { width: viewPortWidth } = useViewportSize();

  const isMobile = viewPortWidth < 600;

  const theme = useMantineTheme();
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isFailed, setisFailed] = useState(false);

  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      message: ''
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
    }
  });
  const sendEmail = async () => {
    setIsSending(true);
    const result = await emailjs.sendForm(
      'service_02cx93e',
      'template_i5qx5qg',
      formRef.current,
      'R5Mrq0z4K5vCUjKBv'
    );
    setIsSending(false);

    if (result && result.status === 200) {
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
      }, 2000);
      form.reset();
    } else {
      setisFailed(true);
      setTimeout(() => {
        setisFailed(false);
      }, 2000);
    }
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <>
      {isFailed && (
        <Notification icon={<X size={18} />} color="red" onClose={() => setisFailed(false)}>
          Email failed to send, please try again.
        </Notification>
      )}
      {isSent && (
        <Notification icon={<Check size={18} />} color="green" onClose={() => setIsSent(false)}>
          Email Sent!
        </Notification>
      )}
      <div
        className="header"
        style={{
          color: theme.colors.sophieMainTheme[0]
        }}>
        CONTACT ME :)
      </div>

      <Box
        sx={{ maxWidth: 600 }}
        style={{ marginLeft: isMobile ? '5px' : 'auto', marginRight: isMobile ? '5px' : 'auto' }}>
        <form ref={formRef} onSubmit={form.onSubmit(sendEmail)}>
          <TextInput required label="Name" {...form.getInputProps('name')} name="from_name" />
          <TextInput required label="Email" {...form.getInputProps('email')} name="from_email" />
          <Textarea
            required
            label="Message"
            autosize
            minRows={4}
            maxRows={6}
            {...form.getInputProps('message')}
            name="message"
          />
          <Group position="right" mt="md">
            <button
              disabled={isSending}
              className="submit-button"
              type="submit"
              style={{
                backgroundColor: isSending ? 'grey' : theme.colors.sophieMainTheme[0],
                borderColor: isSending ? 'grey' : theme.colors.sophieMainTheme[0]
              }}>
              Submit
            </button>
          </Group>
        </form>
        <div className="socials">
          <ThemeIcon
            size="lg"
            style={{
              backgroundColor: theme.colors.sophieMainTheme[0],
              marginRight: 20,
              cursor: 'pointer'
            }}
            onClick={() => openInNewTab('https://www.linkedin.com/in/sophiajilek/')}>
            <BrandLinkedin size={60} />
          </ThemeIcon>
          <ThemeIcon
            size="lg"
            style={{ backgroundColor: theme.colors.sophieMainTheme[0], cursor: 'pointer' }}
            onClick={() =>
              openInNewTab('https://instagram.com/sophiajilekdesigns?igshid=YmMyMTA2M2Y=')
            }>
            <BrandInstagram size={60} />
          </ThemeIcon>
        </div>
      </Box>
    </>
  );
};
