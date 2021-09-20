import reactImg from './assets/img/react.png';
import dataScience from './assets/img/data-science.png';
import marketing from './assets/img/marketing.png';
import design from './assets/img/design.png';
import { v4 as uuidv4 } from 'uuid';

export const categories = [
  {
    icon: 'chart-line',
    title: 'Business',
    total: '1246',
  },
  {
    icon: 'terminal',
    title: 'Information Technology',
    total: '2096',
  },
  {
    icon: 'palette',
    title: 'Design',
    total: '1674',
  },
  {
    icon: 'language',
    title: 'Language Learning',
    total: '744',
  },
  {
    icon: 'camera',
    title: 'Photography',
    total: '328',
  },
  {
    icon: 'microscope',
    title: 'Science',
    total: '455',
  },
];

export const popularcourse = [
  {
    id: 'BI9mhNmi1YaMV3DD1ZRA',
    title: 'React Js Web Development Complete Guide',
    tutor: 'John Carlo',
    categories: 'it',
    rating: 4.5,
    inCart: false,
    price: 240000,
    img: reactImg,
    students: 14327,
    video: 43,
    card: [
      {
        icon: 'user-graduate',
        title: 'students',
        content: '14327',
      },
      {
        icon: 'video',
        title: 'video',
        content: '43 hours',
      },
      {
        icon: 'trophy',
        title: 'rating',
        content: '4.5',
      },
    ],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus similique modi cupiditate aperiam! Earum laudantium aliquid, iusto enim dignissimos non. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus similique modi cupiditate aperiam! Earum laudantium aliquid, iusto enim dignissimos non.',
    willLearn: [
      'Learn to create basic web pages using HTML5 and CSS3',
      'Learn the Javascript language from basic to advanced ',
      'Create user-friendly, beautiful, light and fast websites using React JS',
    ],
    includes: [
      '43 hours on-demand video',
      '26 downloadable resources',
      'Full lifetime access',
      'Certificate of completion',
      'Private discussion groups',
    ],
    content: [
      {
        title: 'Getting Started',
        videos: [
          {
            title: 'Introduction',
            url: 'https://www.youtube.com/embed/QFaFIcGhPoM',
          },
          {
            title: 'What is React?',
            url: 'https://www.youtube.com/embed/N3AkSS5hXMA',
          },
          {
            title: 'Hello World',
            url: 'https://www.youtube.com/embed/9hb_0TZ_MVI',
          },
          {
            title: 'Understanding SPA',
            url:
              'https://www.youtube.com/watch?v=pKYiKbf7sP0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=2',
          },
        ],
      },
      {
        title: 'Refreshing Javascript',
        videos: [
          {
            title: 'Module Introduction',
            url:
              'https://www.youtube.com/watch?v=0Mp2kwE8xY0&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml&index=1',
          },
          {
            title: 'Arrow Function',
            url:
              'https://www.youtube.com/watch?v=nMApc_undbI&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml&index=9',
          },
          {
            title: 'Export and Import',
            url: 'https://www.youtube.com/watch?v=cRHQNNcYf6s',
          },
          {
            title: 'Classes',
            url: 'https://www.youtube.com/watch?v=T-HGdc8L-7w',
          },
          {
            title: 'Spread Operator and Rest Parameter',
            url:
              'https://www.youtube.com/watch?v=1INe_jCWq1Q&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml&index=5',
          },
          'Wrap Up',
        ],
      },
      {
        title: 'Understanding the basic of React',
        videos: [
          {
            title: 'Module Introduction',
            url:
              'https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=1',
          },
          {
            title: 'Using Create React App',
            url:
              'https://www.youtube.com/watch?v=kVeOpcw4GWY&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=2',
          },
          {
            title: 'Understanding folder structure',
            url:
              'https://www.youtube.com/watch?v=9VIiLJL0H4Y&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=3',
          },
          {
            title: 'Understanding JSX',
            url:
              'https://www.youtube.com/watch?v=7fPXI_MnBOY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=8',
          },
          {
            title: 'Components',
            url:
              'https://www.youtube.com/watch?v=Y2hgEGPzTZY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=4',
          },
          {
            title: 'Props',
            url:
              'https://www.youtube.com/watch?v=m7OWXtbiXX8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=9',
          },
          {
            title: 'State',
            url:
              'https://www.youtube.com/watch?v=4ORZ1GmjaMc&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=10',
          },
        ],
      },
      {
        title: 'Getting Started',
        videos: [
          {
            title: 'Introduction',
            url:
              'https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=1',
          },
          { title: 'What is React?' },
          {
            title: 'Hello World',
            url:
              'https://www.youtube.com/watch?v=9hb_0TZ_MVI&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=2',
          },
          {
            title: 'Understanding SPA',
            url:
              'https://www.youtube.com/watch?v=pKYiKbf7sP0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=2',
          },
        ],
      },
      {
        title: 'Refreshing Javascript',
        videos: [
          {
            title: 'Module Introduction',
            url:
              'https://www.youtube.com/watch?v=0Mp2kwE8xY0&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml&index=1',
          },
          {
            title: 'Arrow Function',
            url:
              'https://www.youtube.com/watch?v=nMApc_undbI&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml&index=9',
          },
          {
            title: 'Export and Import',
            url: 'https://www.youtube.com/watch?v=cRHQNNcYf6s',
          },
          {
            title: 'Classes',
            url: 'https://www.youtube.com/watch?v=T-HGdc8L-7w',
          },
          {
            title: 'Spread Operator and Rest Parameter',
            url:
              'https://www.youtube.com/watch?v=1INe_jCWq1Q&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml&index=5',
          },
          'Wrap Up',
        ],
      },
      {
        title: 'Understanding the basic of React',
        videos: [
          {
            title: 'Module Introduction',
            url:
              'https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=1',
          },
          {
            title: 'Using Create React App',
            url:
              'https://www.youtube.com/watch?v=kVeOpcw4GWY&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=2',
          },
          {
            title: 'Understanding folder structure',
            url:
              'https://www.youtube.com/watch?v=9VIiLJL0H4Y&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=3',
          },
          {
            title: 'Understanding JSX',
            url:
              'https://www.youtube.com/watch?v=7fPXI_MnBOY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=8',
          },
          {
            title: 'Components',
            url:
              'https://www.youtube.com/watch?v=Y2hgEGPzTZY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=4',
          },
          {
            title: 'Props',
            url:
              'https://www.youtube.com/watch?v=m7OWXtbiXX8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=9',
          },
          {
            title: 'State',
            url:
              'https://www.youtube.com/watch?v=4ORZ1GmjaMc&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=10',
          },
        ],
      },
    ],
  },
  {
    id: 'VstIXugSXznnx3nlbUkd ',
    title: 'Data Science Fundamentals',
    tutor: 'Steve Lousie',
    categories: 'it',
    rating: 4.7,
    price: 210000,
    inCart: false,
    img: dataScience,
    students: 14327,
    video: 43,
    card: [
      {
        icon: 'user-graduate',
        title: 'students',
        content: '14327',
      },
      {
        icon: 'video',
        title: 'video',
        content: '43 hours',
      },
      {
        icon: 'trophy',
        title: 'rating',
        content: '4.5',
      },
    ],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus similique modi cupiditate aperiam! Earum laudantium aliquid, iusto enim dignissimos non. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus similique modi cupiditate aperiam! Earum laudantium aliquid, iusto enim dignissimos non.',
    willLearn: [
      'Learn to create basic web pages using HTML5 and CSS3',
      'Learn the Javascript language from basic to advanced ',
      'Create user-friendly, beautiful, light and fast websites using React JS',
    ],
    includes: [
      '43 hours on-demand video',
      '26 downloadable resources',
      'Full lifetime access',
      'Certificate of completion',
      'Private discussion groups',
    ],
    content: [
      {
        title: 'Getting Started',
        videos: [
          {
            title: 'Introduction',
            url:
              'https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=1',
          },
          { title: 'What is React?' },
          {
            title: 'Hello World',
            url:
              'https://www.youtube.com/watch?v=9hb_0TZ_MVI&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=2',
          },
          {
            title: 'Understanding SPA',
            url:
              'https://www.youtube.com/watch?v=pKYiKbf7sP0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=2',
          },
        ],
      },
      {
        title: 'Refreshing Javascript',
        videos: [
          {
            title: 'Module Introduction',
            url:
              'https://www.youtube.com/watch?v=0Mp2kwE8xY0&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml&index=1',
          },
          {
            title: 'Arrow Function',
            url:
              'https://www.youtube.com/watch?v=nMApc_undbI&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml&index=9',
          },
          {
            title: 'Export and Import',
            url: 'https://www.youtube.com/watch?v=cRHQNNcYf6s',
          },
          {
            title: 'Classes',
            url: 'https://www.youtube.com/watch?v=T-HGdc8L-7w',
          },
          {
            title: 'Spread Operator and Rest Parameter',
            url:
              'https://www.youtube.com/watch?v=1INe_jCWq1Q&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml&index=5',
          },
          'Wrap Up',
        ],
      },
      {
        title: 'Understanding the basic of React',
        videos: [
          {
            title: 'Module Introduction',
            url:
              'https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=1',
          },
          {
            title: 'Using Create React App',
            url:
              'https://www.youtube.com/watch?v=kVeOpcw4GWY&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=2',
          },
          {
            title: 'Understanding folder structure',
            url:
              'https://www.youtube.com/watch?v=9VIiLJL0H4Y&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=3',
          },
          {
            title: 'Understanding JSX',
            url:
              'https://www.youtube.com/watch?v=7fPXI_MnBOY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=8',
          },
          {
            title: 'Components',
            url:
              'https://www.youtube.com/watch?v=Y2hgEGPzTZY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=4',
          },
          {
            title: 'Props',
            url:
              'https://www.youtube.com/watch?v=m7OWXtbiXX8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=9',
          },
          {
            title: 'State',
            url:
              'https://www.youtube.com/watch?v=4ORZ1GmjaMc&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=10',
          },
        ],
      },
      {
        title: 'Getting Started',
        videos: [
          {
            title: 'Introduction',
            url:
              'https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=1',
          },
          { title: 'What is React?' },
          {
            title: 'Hello World',
            url:
              'https://www.youtube.com/watch?v=9hb_0TZ_MVI&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=2',
          },
          {
            title: 'Understanding SPA',
            url:
              'https://www.youtube.com/watch?v=pKYiKbf7sP0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=2',
          },
        ],
      },
      {
        title: 'Refreshing Javascript',
        videos: [
          {
            title: 'Module Introduction',
            url:
              'https://www.youtube.com/watch?v=0Mp2kwE8xY0&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml&index=1',
          },
          {
            title: 'Arrow Function',
            url:
              'https://www.youtube.com/watch?v=nMApc_undbI&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml&index=9',
          },
          {
            title: 'Export and Import',
            url: 'https://www.youtube.com/watch?v=cRHQNNcYf6s',
          },
          {
            title: 'Classes',
            url: 'https://www.youtube.com/watch?v=T-HGdc8L-7w',
          },
          {
            title: 'Spread Operator and Rest Parameter',
            url:
              'https://www.youtube.com/watch?v=1INe_jCWq1Q&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml&index=5',
          },
          'Wrap Up',
        ],
      },
      {
        title: 'Understanding the basic of React',
        videos: [
          {
            title: 'Module Introduction',
            url:
              'https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=1',
          },
          {
            title: 'Using Create React App',
            url:
              'https://www.youtube.com/watch?v=kVeOpcw4GWY&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=2',
          },
          {
            title: 'Understanding folder structure',
            url:
              'https://www.youtube.com/watch?v=9VIiLJL0H4Y&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=3',
          },
          {
            title: 'Understanding JSX',
            url:
              'https://www.youtube.com/watch?v=7fPXI_MnBOY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=8',
          },
          {
            title: 'Components',
            url:
              'https://www.youtube.com/watch?v=Y2hgEGPzTZY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=4',
          },
          {
            title: 'Props',
            url:
              'https://www.youtube.com/watch?v=m7OWXtbiXX8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=9',
          },
          {
            title: 'State',
            url:
              'https://www.youtube.com/watch?v=4ORZ1GmjaMc&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=10',
          },
        ],
      },
    ],
  },
  {
    id: 'Ych2JFNdmXnYQWu3XfoC',
    title: 'Graphic Design for Beginners',
    tutor: 'Miko Suzuki',
    categories: 'design',
    rating: 4.6,
    price: 150000,
    inCart: false,
    img: marketing,
    students: 14327,
    video: 43,
    card: [
      {
        icon: 'user-graduate',
        title: 'students',
        content: '14327',
      },
      {
        icon: 'video',
        title: 'video',
        content: '43 hours',
      },
      {
        icon: 'trophy',
        title: 'rating',
        content: '4.5',
      },
    ],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus similique modi cupiditate aperiam! Earum laudantium aliquid, iusto enim dignissimos non. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus similique modi cupiditate aperiam! Earum laudantium aliquid, iusto enim dignissimos non.',
    willLearn: [
      'Learn to create basic web pages using HTML5 and CSS3',
      'Learn the Javascript language from basic to advanced ',
      'Create user-friendly, beautiful, light and fast websites using React JS',
    ],
    includes: [
      '43 hours on-demand video',
      '26 downloadable resources',
      'Full lifetime access',
      'Certificate of completion',
      'Private discussion groups',
    ],
    content: [
      {
        title: 'Getting Started',
        videos: [
          {
            title: 'Introduction',
            url:
              'https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=1',
          },
          { title: 'What is React?' },
          {
            title: 'Hello World',
            url:
              'https://www.youtube.com/watch?v=9hb_0TZ_MVI&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=2',
          },
          {
            title: 'Understanding SPA',
            url:
              'https://www.youtube.com/watch?v=pKYiKbf7sP0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=2',
          },
        ],
      },
      {
        title: 'Refreshing Javascript',
        videos: [
          {
            title: 'Module Introduction',
            url:
              'https://www.youtube.com/watch?v=0Mp2kwE8xY0&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml&index=1',
          },
          {
            title: 'Arrow Function',
            url:
              'https://www.youtube.com/watch?v=nMApc_undbI&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml&index=9',
          },
          {
            title: 'Export and Import',
            url: 'https://www.youtube.com/watch?v=cRHQNNcYf6s',
          },
          {
            title: 'Classes',
            url: 'https://www.youtube.com/watch?v=T-HGdc8L-7w',
          },
          {
            title: 'Spread Operator and Rest Parameter',
            url:
              'https://www.youtube.com/watch?v=1INe_jCWq1Q&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml&index=5',
          },
          'Wrap Up',
        ],
      },
      {
        title: 'Understanding the basic of React',
        videos: [
          {
            title: 'Module Introduction',
            url:
              'https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=1',
          },
          {
            title: 'Using Create React App',
            url:
              'https://www.youtube.com/watch?v=kVeOpcw4GWY&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=2',
          },
          {
            title: 'Understanding folder structure',
            url:
              'https://www.youtube.com/watch?v=9VIiLJL0H4Y&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=3',
          },
          {
            title: 'Understanding JSX',
            url:
              'https://www.youtube.com/watch?v=7fPXI_MnBOY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=8',
          },
          {
            title: 'Components',
            url:
              'https://www.youtube.com/watch?v=Y2hgEGPzTZY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=4',
          },
          {
            title: 'Props',
            url:
              'https://www.youtube.com/watch?v=m7OWXtbiXX8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=9',
          },
          {
            title: 'State',
            url:
              'https://www.youtube.com/watch?v=4ORZ1GmjaMc&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=10',
          },
        ],
      },
      {
        title: 'Getting Started',
        videos: [
          {
            title: 'Introduction',
            url:
              'https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=1',
          },
          { title: 'What is React?' },
          {
            title: 'Hello World',
            url:
              'https://www.youtube.com/watch?v=9hb_0TZ_MVI&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=2',
          },
          {
            title: 'Understanding SPA',
            url:
              'https://www.youtube.com/watch?v=pKYiKbf7sP0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=2',
          },
        ],
      },
      {
        title: 'Refreshing Javascript',
        videos: [
          {
            title: 'Module Introduction',
            url:
              'https://www.youtube.com/watch?v=0Mp2kwE8xY0&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml&index=1',
          },
          {
            title: 'Arrow Function',
            url:
              'https://www.youtube.com/watch?v=nMApc_undbI&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml&index=9',
          },
          {
            title: 'Export and Import',
            url: 'https://www.youtube.com/watch?v=cRHQNNcYf6s',
          },
          {
            title: 'Classes',
            url: 'https://www.youtube.com/watch?v=T-HGdc8L-7w',
          },
          {
            title: 'Spread Operator and Rest Parameter',
            url:
              'https://www.youtube.com/watch?v=1INe_jCWq1Q&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml&index=5',
          },
          'Wrap Up',
        ],
      },
      {
        title: 'Understanding the basic of React',
        videos: [
          {
            title: 'Module Introduction',
            url:
              'https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=1',
          },
          {
            title: 'Using Create React App',
            url:
              'https://www.youtube.com/watch?v=kVeOpcw4GWY&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=2',
          },
          {
            title: 'Understanding folder structure',
            url:
              'https://www.youtube.com/watch?v=9VIiLJL0H4Y&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=3',
          },
          {
            title: 'Understanding JSX',
            url:
              'https://www.youtube.com/watch?v=7fPXI_MnBOY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=8',
          },
          {
            title: 'Components',
            url:
              'https://www.youtube.com/watch?v=Y2hgEGPzTZY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=4',
          },
          {
            title: 'Props',
            url:
              'https://www.youtube.com/watch?v=m7OWXtbiXX8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=9',
          },
          {
            title: 'State',
            url:
              'https://www.youtube.com/watch?v=4ORZ1GmjaMc&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=10',
          },
        ],
      },
    ],
  },
  {
    id: 'rCn2bhQVvBuWKat7TxDd',
    title: 'Professional Marketing Masterclass',
    tutor: 'Clara Hanna',
    type: 'business',
    rating: 4.4,
    price: 200000,
    inCart: false,
    img: design,
    students: 14327,
    video: 43,
    card: [
      {
        icon: 'user-graduate',
        title: 'students',
        content: '14327',
      },
      {
        icon: 'video',
        title: 'video',
        content: '43 hours',
      },
      {
        icon: 'trophy',
        title: 'rating',
        content: '4.5',
      },
    ],
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus similique modi cupiditate aperiam! Earum laudantium aliquid, iusto enim dignissimos non. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus similique modi cupiditate aperiam! Earum laudantium aliquid, iusto enim dignissimos non.',
    willLearn: [
      'Learn to create basic web pages using HTML5 and CSS3',
      'Learn the Javascript language from basic to advanced ',
      'Create user-friendly, beautiful, light and fast websites using React JS',
    ],
    includes: [
      '43 hours on-demand video',
      '26 downloadable resources',
      'Full lifetime access',
      'Certificate of completion',
      'Private discussion groups',
    ],
    content: [
      {
        title: 'Getting Started',
        videos: [
          {
            title: 'Introduction',
            url:
              'https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=1',
          },
          { title: 'What is React?' },
          {
            title: 'Hello World',
            url:
              'https://www.youtube.com/watch?v=9hb_0TZ_MVI&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=2',
          },
          {
            title: 'Understanding SPA',
            url:
              'https://www.youtube.com/watch?v=pKYiKbf7sP0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=2',
          },
        ],
      },
      {
        title: 'Refreshing Javascript',
        videos: [
          {
            title: 'Module Introduction',
            url:
              'https://www.youtube.com/watch?v=0Mp2kwE8xY0&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml&index=1',
          },
          {
            title: 'Arrow Function',
            url:
              'https://www.youtube.com/watch?v=nMApc_undbI&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml&index=9',
          },
          {
            title: 'Export and Import',
            url: 'https://www.youtube.com/watch?v=cRHQNNcYf6s',
          },
          {
            title: 'Classes',
            url: 'https://www.youtube.com/watch?v=T-HGdc8L-7w',
          },
          {
            title: 'Spread Operator and Rest Parameter',
            url:
              'https://www.youtube.com/watch?v=1INe_jCWq1Q&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml&index=5',
          },
          'Wrap Up',
        ],
      },
      {
        title: 'Understanding the basic of React',
        videos: [
          {
            title: 'Module Introduction',
            url:
              'https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=1',
          },
          {
            title: 'Using Create React App',
            url:
              'https://www.youtube.com/watch?v=kVeOpcw4GWY&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=2',
          },
          {
            title: 'Understanding folder structure',
            url:
              'https://www.youtube.com/watch?v=9VIiLJL0H4Y&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=3',
          },
          {
            title: 'Understanding JSX',
            url:
              'https://www.youtube.com/watch?v=7fPXI_MnBOY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=8',
          },
          {
            title: 'Components',
            url:
              'https://www.youtube.com/watch?v=Y2hgEGPzTZY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=4',
          },
          {
            title: 'Props',
            url:
              'https://www.youtube.com/watch?v=m7OWXtbiXX8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=9',
          },
          {
            title: 'State',
            url:
              'https://www.youtube.com/watch?v=4ORZ1GmjaMc&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=10',
          },
        ],
      },
      {
        title: 'Getting Started',
        videos: [
          {
            title: 'Introduction',
            url:
              'https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=1',
          },
          { title: 'What is React?' },
          {
            title: 'Hello World',
            url:
              'https://www.youtube.com/watch?v=9hb_0TZ_MVI&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=2',
          },
          {
            title: 'Understanding SPA',
            url:
              'https://www.youtube.com/watch?v=pKYiKbf7sP0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=2',
          },
        ],
      },
      {
        title: 'Refreshing Javascript',
        videos: [
          {
            title: 'Module Introduction',
            url:
              'https://www.youtube.com/watch?v=0Mp2kwE8xY0&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml&index=1',
          },
          {
            title: 'Arrow Function',
            url:
              'https://www.youtube.com/watch?v=nMApc_undbI&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml&index=9',
          },
          {
            title: 'Export and Import',
            url: 'https://www.youtube.com/watch?v=cRHQNNcYf6s',
          },
          {
            title: 'Classes',
            url: 'https://www.youtube.com/watch?v=T-HGdc8L-7w',
          },
          {
            title: 'Spread Operator and Rest Parameter',
            url:
              'https://www.youtube.com/watch?v=1INe_jCWq1Q&list=PL4cUxeGkcC9gKfw25slm4CUDUcM_sXdml&index=5',
          },
          'Wrap Up',
        ],
      },
      {
        title: 'Understanding the basic of React',
        videos: [
          {
            title: 'Module Introduction',
            url:
              'https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=1',
          },
          {
            title: 'Using Create React App',
            url:
              'https://www.youtube.com/watch?v=kVeOpcw4GWY&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=2',
          },
          {
            title: 'Understanding folder structure',
            url:
              'https://www.youtube.com/watch?v=9VIiLJL0H4Y&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=3',
          },
          {
            title: 'Understanding JSX',
            url:
              'https://www.youtube.com/watch?v=7fPXI_MnBOY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=8',
          },
          {
            title: 'Components',
            url:
              'https://www.youtube.com/watch?v=Y2hgEGPzTZY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=4',
          },
          {
            title: 'Props',
            url:
              'https://www.youtube.com/watch?v=m7OWXtbiXX8&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=9',
          },
          {
            title: 'State',
            url:
              'https://www.youtube.com/watch?v=4ORZ1GmjaMc&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=10',
          },
        ],
      },
    ],
  },
];

export const review = [
  {
    text: 'The courses were up to date and high demand',
    person: 'Brian Davidson, Frontend Developer',
  },
  {
    text: 'The prices were affordable with great materials',
    person: 'Peter, Product Designer',
  },
  {
    text: 'All material is well structured and professional tutors',
    person: 'Silvia, Software Engineer',
  },
];
