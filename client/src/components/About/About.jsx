import React from "react";
import { useSpring, animated } from "react-spring";
import Linkedin from "../Images/Linkedin.png";
const TeamMember = ({ name, title, imageSrc, link }) => {
  return (
    <div className="border-all overflow-hidden">
      <img
        className="w-full h-56 object-cover object-center border-dashed"
        src={imageSrc}
        alt={name}
      />
      <div className="px-6 py-4 bg-white">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <p className="text-gray-600">{title}</p>
      </div>
      <div className="px-6 py-4 bg-white">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex border-all items-center px-2 font-semibold text-xs text-gray uppercase tracking-widest hover:bg-blue-100 focus:outline-none   disabled:opacity-25 transition ease-in-out duration-150"
        >
          <img src={Linkedin} alt="LinkedIn" class="w-8 h-8 " />
          <span>Linkedin</span>
        </a>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Juan David Diaz Orozco",
      title: "Description",
      imageSrc: 'https://res.cloudinary.com/dviri5ov1/image/upload/v1680651255/fastball/system/Juan_xbnm7u.jpg',
      link: "https://www.linkedin.com/in/juan-david-diaz-orozco-8b850a1a7",
    },
    {
      name: "Jorge Kerk ",
      title: "Description",
      imageSrc:
        "https://res.cloudinary.com/dviri5ov1/image/upload/v1680651469/fastball/system/WIN_20221029_15_26_16_Pro_gtw5ey.jpg",
      link: "https://www.linkedin.com/",
    },
    {
      name: "Pedro David Gonzalez",
      title: "Description",
      imageSrc:
        "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      link: "https://www.linkedin.com/in/pedro-gonzalez-4468ba24a/",
    },
    {
      name: "Olivio Subelza Cabezas",
      title: "Description",
      imageSrc: 'https://res.cloudinary.com/dviri5ov1/image/upload/v1680651255/fastball/system/Olivio_jqoa0k.jpg',
      link: "https://www.linkedin.com/in/olivio-subelza-b646a2249/",
    },
  ];

  return (
    <div className="bg-white  ">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center border-dashed p-4">
          <h2 className="text-3xl font-extrabold text-gray-900">Our team</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Meet the people behind our brand.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              title={member.title}
              imageSrc={member.imageSrc}
              link={member.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <animated.div
      style={useSpring({
        opacity: 5,
        transform: "translateY(0)",
        from: { opacity: 0, transform: "translateY(-50px)" },
      })}
    >
      <div className="mt-12 container mx-auto px-4 py-6 md:py-8 lg:py-12">
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <h4 className="text-3x2 font-extrabold tracking-tight text-blue-900 sm:text-4xl">
                About us
              </h4>

              <p className="mt-4 max-w-xl shad text-xl border-all p-4 text-gray-900 sm:mt-0">
                Hello! We are a team of four programmers who specialize in both
                backend and frontend development. We enjoy exploring different
                technologies and tools to create unique and effective solutions
                for our clients. We are students at Soy Henry, pursuing a Full
                Stack Web Development career, which allows us to have a
                comprehensive understanding of the entire development process
                and offer complete and integrated solutions. We are passionate
                about what we do and strive to stay updated on the latest trends
                and technological advancements to provide the best possible
                service.
              </p>
            </div>
          </div>
        </div>

        <TeamSection />
      </div>
    </animated.div>
  );
};

export default About;
