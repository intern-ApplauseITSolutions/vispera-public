import Layout from "../components/layout/Layout";
import HeaderBanner from "../components/common/HeaderBanner";
import OurWorkHeader from "../components/OurWork/OurWorkHeader";
import Documentaries from "../components/OurWork/Documentaries";
import ProjectsBlackCards from "../components/OurWork/ProjectsBlackCards";
import ReelsShortFilms from "../components/OurWork/ReelsShortFilms";
import FilmsFromProject from "../components/OurWork/FilmsFromProject";
import Websites from "../components/OurWork/Websites";
import { useState } from "react";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Latest");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSort = (option) => {
    setSortBy(option);
  };

  // Check if sortBy is a category selection
  const isSortByCategory = 
    sortBy === "Documentary" ||
    sortBy === "Corporate Films" ||
    sortBy === "Reels & Short Films" ||
    sortBy === "Films from the Project" ||
    sortBy === "Websites";

  // If sortBy is "All" or "Latest", show all categories
  if (sortBy === "All" || sortBy === "Latest") {
    return (
      <Layout>
        <div className="mt-16 md:mt-20 lg:mt-24">
          <HeaderBanner title="Our Work" />
        </div>
        <OurWorkHeader onSearch={handleSearch} onSort={handleSort} />
        <Documentaries searchQuery={searchQuery} sortBy={sortBy} />
        <ProjectsBlackCards searchQuery={searchQuery} sortBy={sortBy} />
        <ReelsShortFilms searchQuery={searchQuery} sortBy={sortBy} />
        <FilmsFromProject searchQuery={searchQuery} sortBy={sortBy} />
        <Websites searchQuery={searchQuery} sortBy={sortBy} />
      </Layout>
    );
  }

  // If sortBy is a category, show only that category
  if (isSortByCategory) {
    const showDocumentaries = sortBy === "Documentary";
    const showCorporateFilms = sortBy === "Corporate Films";
    const showReelsShortFilms = sortBy === "Reels & Short Films";
    const showFilmsFromProject = sortBy === "Films from the Project";
    const showWebsites = sortBy === "Websites";

    return (
      <Layout>
        <div className="mt-16 md:mt-20 lg:mt-24">
          <HeaderBanner title="Our Work" />
        </div>
        <OurWorkHeader onSearch={handleSearch} onSort={handleSort} />
        {showDocumentaries && <Documentaries searchQuery={searchQuery} sortBy={sortBy} />}
        {showCorporateFilms && <ProjectsBlackCards searchQuery={searchQuery} sortBy={sortBy} />}
        {showReelsShortFilms && <ReelsShortFilms searchQuery={searchQuery} sortBy={sortBy} />}
        {showFilmsFromProject && <FilmsFromProject searchQuery={searchQuery} sortBy={sortBy} />}
        {showWebsites && <Websites searchQuery={searchQuery} sortBy={sortBy} />}
      </Layout>
    );
  }

  // If search query is empty, show all categories
  if (!searchQuery.trim()) {
    return (
      <Layout>
        <div className="mt-16 md:mt-20 lg:mt-24">
          <HeaderBanner title="Our Work" />
        </div>
        <OurWorkHeader onSearch={handleSearch} onSort={handleSort} />
        <Documentaries searchQuery={searchQuery} sortBy={sortBy} />
        <ProjectsBlackCards searchQuery={searchQuery} sortBy={sortBy} />
        <ReelsShortFilms searchQuery={searchQuery} sortBy={sortBy} />
        <FilmsFromProject searchQuery={searchQuery} sortBy={sortBy} />
        <Websites searchQuery={searchQuery} sortBy={sortBy} />
      </Layout>
    );
  }

  // If search query exists, check if it's a category search or project name search
  const queryLower = searchQuery.toLowerCase();
  
  // Check if query matches any category name
  const isCategorySearch = 
    queryLower.includes("documentary") ||
    queryLower.includes("corporate") ||
    queryLower.includes("reels") ||
    queryLower.includes("short") ||
    queryLower.includes("films from") ||
    queryLower.includes("project") ||
    queryLower.includes("websites");

  // If it's a category search, show only matching categories
  if (isCategorySearch) {
    const showDocumentaries = queryLower.includes("documentary");
    const showCorporateFilms = queryLower.includes("corporate");
    const showReelsShortFilms = queryLower.includes("reels") || queryLower.includes("short");
    const showFilmsFromProject = queryLower.includes("films from") || queryLower.includes("project");
    const showWebsites = queryLower.includes("websites");

    return (
      <Layout>
        <div className="mt-16 md:mt-20 lg:mt-24">
          <HeaderBanner title="Our Work" />
        </div>
        <OurWorkHeader onSearch={handleSearch} onSort={handleSort} />
        {showDocumentaries && <Documentaries searchQuery="" sortBy={sortBy} />}
        {showCorporateFilms && <ProjectsBlackCards searchQuery="" sortBy={sortBy} />}
        {showReelsShortFilms && <ReelsShortFilms searchQuery="" sortBy={sortBy} />}
        {showFilmsFromProject && <FilmsFromProject searchQuery="" sortBy={sortBy} />}
        {showWebsites && <Websites searchQuery="" sortBy={sortBy} />}
      </Layout>
    );
  }

  // If it's a project name search, show all categories but filter projects within them
  // Only show categories that have matching projects
  return (
    <Layout>
      <div className="mt-16 md:mt-20 lg:mt-24">
        <HeaderBanner title="Our Work" />
      </div>
      <OurWorkHeader onSearch={handleSearch} onSort={handleSort} />
      <Documentaries searchQuery={searchQuery} sortBy={sortBy} />
      <ProjectsBlackCards searchQuery={searchQuery} sortBy={sortBy} />
      <ReelsShortFilms searchQuery={searchQuery} sortBy={sortBy} />
      <FilmsFromProject searchQuery={searchQuery} sortBy={sortBy} />
      <Websites searchQuery={searchQuery} sortBy={sortBy} />
    </Layout>
  );
}
