import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navigation: {
        home: 'Home',
        projects: 'Projects',
        experience: 'Experience',
        contact: 'Contact'
      },
      hero: {
        title: 'Engineering Student & Developer',
        description: 'I am a {{age}} years old engineering student at Federico II university. In my spare time I like to write C, but I know also other languages such as Python, C++, Rust and BrainFuck.',
        contact: 'Get in Touch'
      },
      about: {
        title: 'About Me',
        description: 'Passionate computer engineering student with a love for low-level programming and system design.'
      },
      skills: {
        title: 'Technical Skills',
        languages: 'Programming Languages',
        technologies: 'Technologies & Tools',
        interests: 'Areas of Interest'
      },
      projects: {
        title: 'Featured Projects',
        viewLive: 'View Live',
        viewSource: 'View Source',
        privacy: 'Privacy Policy'
      },
      experience: {
        title: 'Education & Experience',
        education: 'Education',
        work: 'Work Experience',
        future: 'Future Plans'
      },
      contact: {
        title: 'Get In Touch',
        email: 'Email',
        github: 'GitHub',
        website: 'Website'
      }
    }
  },
  it: {
    translation: {
      navigation: {
        home: 'Home',
        projects: 'Progetti',
        experience: 'Esperienza',
        contact: 'Contatti'
      },
      hero: {
        title: 'Studente di Ingegneria & Sviluppatore',
        description: 'Sono uno studente di ingegneria di {{age}} anni presso l\'università Federico II. Nel tempo libero mi piace scrivere in C, ma conosco anche altri linguaggi come Python, C++, Rust e BrainFuck.',
        contact: 'Contattami'
      },
      about: {
        title: 'Chi Sono',
        description: 'Studente di ingegneria informatica appassionato di programmazione a basso livello e progettazione di sistemi.'
      },
      skills: {
        title: 'Competenze Tecniche',
        languages: 'Linguaggi di Programmazione',
        technologies: 'Tecnologie & Strumenti',
        interests: 'Aree di Interesse'
      },
      projects: {
        title: 'Progetti in Evidenza',
        viewLive: 'Visualizza Live',
        viewSource: 'Codice Sorgente',
        privacy: 'Politica sulla Privacy'
      },
      experience: {
        title: 'Formazione & Esperienza',
        education: 'Formazione',
        work: 'Esperienza Lavorativa',
        future: 'Piani Futuri'
      },
      contact: {
        title: 'Contattami',
        email: 'Email',
        github: 'GitHub',
        website: 'Sito Web'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;