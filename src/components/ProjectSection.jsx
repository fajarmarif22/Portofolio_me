import React from "react";
import Projectcard from "./Projectcard";
import Image1 from "../assets/Images/Category_list_menu.png"
import Image2 from "../assets/Images/Cocktail_DB_1.png"
import Image3 from "../assets/Images/color_generator.png"
import Image4 from "../assets/Images/dark-mode-page_1.png"
import Image5 from "../assets/Images/func-random-user.png"
import Image6 from "../assets/Images/newspaper-with-pagination_1.png"
import Image7 from "../assets/Images/Pagination_page.png"
import Image8 from "../assets/Images/Photos-menu-react_1.png"
import Image9 from "../assets/Images/Stripe-project_1.png"
import Image10 from "../assets/Images/Markdown.png"



const projectData = [
  {
    id: 1,
    title: "List menu based on food categories",
    image: Image1,
    description: "Project 1",
    link: "https://github.com/fajarmarif22/category-list-menu-react"
  },
  {
    id: 2,
    title: "Cocktail menu with detail pages for each product",
    image: Image2,
    description: "Project 2",
    link: "https://github.com/fajarmarif22/Cocktail-menu-react-router"
  },
  {
    id: 3,
    title: "Color generator",
    image: Image3,
    description: "Project 3",
    link: "https://github.com/fajarmarif22/color-generator"
  },
  {
    id: 4,
    title: "Dark mode project",
    image: Image4,
    description: "Project 4",
    link: "https://github.com/fajarmarif22/dark-mode-page"
  },
  {
    id: 5,
    title: "Random picking user",
    image: Image5,
    description: "Project 5",
    link: "https://github.com/fajarmarif22/random-user"
  },
  {
    id: 6,
    title: "Markdown",
    image: Image10,
    description: "Project 6",
    link: "https://github.com/fajarmarif22/react-markdown"
  },
  {
    id: 7,
    title: "Newspaper with pagination",
    image: Image7,
    description: "Project 7",
    link: "https://github.com/fajarmarif22/newspaper-with-pagination"
  },
  {
    id: 8,
    title: "Paginition page",
    image: Image8,
    description: "Project 8",
    link: "https://github.com/fajarmarif22/pagination-page"
  },
  {
    id: 9,
    title: "Stripe Project",
    image: Image9,
    description: "Project 9",
    link: "https://github.com/fajarmarif22/stripe-submenu-project"
  },
  {
    id: 10,
    title: "Photo Menu",
    image: Image6,
    description: "Project 10",
    link: "https://github.com/fajarmarif22/Photos-menu-react"
  },
]
function ProjectSection() {
  return (
  <section className="text-white">
    <h2 className="p-5 text-2xl font-semibold ">My Project</h2>
    <div className="grid grid-cols-2 gap-5">
      {
        projectData.map((project)=><Projectcard key={project.id} title={project.title} description={project.description} urlLink={project.link} imgUrl={project.image}/>)
      }
    </div>
  </section>
)
}

export default ProjectSection;
