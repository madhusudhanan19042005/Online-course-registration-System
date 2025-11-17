(() => {
    // Course data
    const state = {
      hoveredCard: null,
      selectedCard: null,
      courses: [
        {
          id: 1,
          title: "Java Programming",
          icon: "☕",
          students: "12.5K",
          duration: "16 weeks",
          level: "Beginner to Advanced",
          description:
            "Master Java fundamentals, OOP, data structures, and enterprise development",
          color: "#f89820",
        },
        {
          id: 2,
          title: "UI/UX Design",
          icon: "🎨",
          students: "8.2K",
          duration: "12 weeks",
          level: "All Levels",
          description:
            "Learn design principles, wireframing, prototyping and user research",
          color: "#ff5252",
        },
        {
          id: 3,
          title: "Git & Version Control",
          icon: "📚",
          students: "5.4K",
          duration: "6 weeks",
          level: "Beginner",
          description:
            "Version control fundamentals, branching strategies and collaboration",
          color: "#f05033",
        },
        {
          id: 4,
          title: "Cloud Computing",
          icon: "☁️",
          students: "15.3K",
          duration: "20 weeks",
          level: "Intermediate",
          description:
            "AWS, Azure, cloud architecture, deployment and scaling strategies",
          color: "#0080ff",
        },
        {
          id: 5,
          title: "Machine Learning",
          icon: "🤖",
          students: "10.1K",
          duration: "24 weeks",
          level: "Advanced",
          description: "Neural networks, deep learning, NLP and computer vision",
          color: "#00b894",
        },
        {
          id: 6,
          title: "Blockchain Technology",
          icon: "⛓️",
          students: "7.8K",
          duration: "16 weeks",
          level: "Intermediate",
          description:
            "Cryptocurrency, smart contracts, DeFi and Web3 development",
          color: "#6c5ce7",
        },
        {
          id: 7,
          title: "Data Science",
          icon: "📊",
          students: "14.2K",
          duration: "20 weeks",
          level: "Intermediate",
          description:
            "Data analysis, visualization, statistical modeling and Python",
          color: "#e84393",
        },
        {
          id: 8,
          title: "Digital Marketing",
          icon: "📱",
          students: "9.6K",
          duration: "12 weeks",
          level: "All Levels",
          description: "SEO, social media, content strategy and analytics",
          color: "#00cec9",
        },
        {
          id: 9,
          title: "Cybersecurity",
          icon: "🔒",
          students: "11.7K",
          duration: "22 weeks",
          level: "Intermediate",
          description:
            "Network security, ethical hacking, cryptography and threat analysis",
          color: "#2d3436",
        },
      ],
    };
  
    // Initialize the page
    function init() {
      renderCourses();
      setupEventListeners();
    }
  
    // Render all courses
    function renderCourses() {
      const coursesGrid = document.querySelector(".courses-grid");
      coursesGrid.innerHTML = "";
  
      state.courses.forEach((course) => {
        const courseCard = createCourseCard(course);
        coursesGrid.appendChild(courseCard);
      });
    }
  
    // Create a course card element
    function createCourseCard(course) {
      const article = document.createElement("article");
      article.className = "course-card";
      article.dataset.courseId = course.id;
  
      const isNew = course.id === 9;
  
      article.innerHTML = `
        <div class="course-content">
          <div class="course-icon" style="background-color: ${course.color}">
            ${course.icon}
          </div>
          <div class="course-details">
            <div class="course-header">
              <h3 class="course-title">${course.title}</h3>
              ${isNew ? '<span class="course-badge">New</span>' : ""}
            </div>
            <p class="course-description">${course.description}</p>
            <div class="course-stats">
              <span class="stat-badge">${course.students} Students</span>
              <span class="stat-badge">${course.duration}</span>
              <span class="stat-badge">${course.level}</span>
            </div>
            <div class="course-actions">
              <button class="enroll-button">Enroll Now</button>
              <button class="learn-more-button">Learn More</button>
            </div>
          </div>
        </div>
      `;
  
      return article;
    }
  
    // Set up event listeners
    function setupEventListeners() {
      // Course card hover effects
      document.querySelectorAll(".course-card").forEach((card) => {
        card.addEventListener("mouseenter", handleCardMouseEnter);
        card.addEventListener("mouseleave", handleCardMouseLeave);
      });
  
      // View all button hover effects
      const viewAllButton = document.querySelector(".view-all-button");
      viewAllButton.addEventListener("mouseenter", handleViewAllMouseEnter);
      viewAllButton.addEventListener("mouseleave", handleViewAllMouseLeave);
    }
  
    // Event handlers
    function handleCardMouseEnter(event) {
      const card = event.currentTarget;
      const courseId = parseInt(card.dataset.courseId);
  
      // Update state
      state.hoveredCard = courseId;
  
      // Apply hover effects
      card.style.transform = "scale(1.02)";
  
      // Update button styles
      const enrollButton = card.querySelector(".enroll-button");
      const learnMoreButton = card.querySelector(".learn-more-button");
  
      enrollButton.style.backgroundColor = "#4318D1";
      enrollButton.style.transform = "translateY(-2px)";
  
      learnMoreButton.style.borderColor = "#4318D1";
      learnMoreButton.style.color = "#4318D1";
    }
  
    function handleCardMouseLeave(event) {
      const card = event.currentTarget;
  
      // Reset state
      state.hoveredCard = null;
  
      // Reset hover effects
      card.style.transform = "scale(1)";
  
      // Reset button styles
      const enrollButton = card.querySelector(".enroll-button");
      const learnMoreButton = card.querySelector(".learn-more-button");
  
      enrollButton.style.backgroundColor = "#65558F";
      enrollButton.style.transform = "translateY(0)";
  
      learnMoreButton.style.borderColor = "#65558F";
      learnMoreButton.style.color = "#65558F";
    }
  
    function handleViewAllMouseEnter(event) {
      state.hoveredCard = "viewAll";
  
      const button = event.currentTarget;
      button.style.backgroundColor = "#4318D1";
      button.style.transform = "translateY(-2px)";
    }
  
    function handleViewAllMouseLeave(event) {
      state.hoveredCard = null;
  
      const button = event.currentTarget;
      button.style.backgroundColor = "#65558F";
      button.style.transform = "translateY(0)";
    }
  
    // Initialize when DOM is loaded
    document.addEventListener("DOMContentLoaded", init);
  })();
  