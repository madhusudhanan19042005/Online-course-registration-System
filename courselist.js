// Course data
const courses = [
    {
        id: 1,
        title: "Web Development Masterclass",
        description: "Learn HTML, CSS, JavaScript, and modern web frameworks",
        fullDescription: "Master the fundamentals of web development and build responsive, dynamic websites. This comprehensive course covers HTML5, CSS3, JavaScript ES6+, React, and more.",
        icon: "💻",
        color: "#667eea",
        duration: "12 weeks",
        students: "2,500+",
        price: 200.00
    },
    {
        id: 2,
        title: "Data Science & Analytics",
        description: "Master data analysis, visualization, and machine learning",
        fullDescription: "Dive deep into data science with Python, pandas, NumPy, and machine learning algorithms. Learn to extract insights from data and build predictive models.",
        icon: "📊",
        color: "#f59e0b",
        duration: "10 weeks",
        students: "1,800+",
        price: 189.00
    },
    {
        id: 3,
        title: "Digital Marketing Pro",
        description: "SEO, social media, content marketing, and analytics",
        fullDescription: "Become a digital marketing expert. Learn SEO strategies, social media marketing, content creation, email campaigns, and how to measure your marketing ROI.",
        icon: "📱",
        color: "#10b981",
        duration: "8 weeks",
        students: "3,200+",
        price: 195.00
    },
    {
        id: 4,
        title: "UI/UX Design Bootcamp",
        description: "Design beautiful and user-friendly interfaces",
        fullDescription: "Learn the principles of user experience and interface design. Master tools like Figma, Adobe XD, and create stunning designs that users love.",
        icon: "🎨",
        color: "#ec4899",
        duration: "6 weeks",
        students: "1,500+",
        price: 189.00
    },
    {
        id: 5,
        title: "Mobile App Development",
        description: "Build iOS and Android apps with React Native",
        fullDescription: "Create cross-platform mobile applications using React Native. Learn to build, test, and deploy apps to both iOS and Android app stores.",
        icon: "📲",
        color: "#8b5cf6",
        duration: "14 weeks",
        students: "1,200+",
        price: 200.00
    },
    {
        id: 6,
        title: "Cloud Computing AWS",
        description: "Master Amazon Web Services and cloud infrastructure",
        fullDescription: "Learn to architect, deploy, and manage applications on AWS. Covers EC2, S3, Lambda, RDS, and other essential AWS services.",
        icon: "☁️",
        color: "#06b6d4",
        duration: "10 weeks",
        students: "900+",
        price: 189.00
    }
];

let selectedCourse = null;

// Render course cards
function renderCourses() {
    const courseGrid = document.getElementById('courseGrid');
    courseGrid.innerHTML = '';

    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.onclick = () => openCourseModal(course);

        courseCard.innerHTML = `
            <div class="course-icon" style="background-color: ${course.color}20;">
                ${course.icon}
            </div>
            <h3 class="course-title">${course.title}</h3>
            <p class="course-description">${course.description}</p>
            <div class="course-meta">
                <span>⏱️ ${course.duration}</span>
                <span>👥 ${course.students}</span>
            </div>
            <div class="course-price">$${course.price.toFixed(2)}</div>
        `;

        courseGrid.appendChild(courseCard);
    });
}

// Open course modal
function openCourseModal(course) {
    selectedCourse = course;
    const modal = document.getElementById('courseModal');

    // Set modal content
    document.getElementById('modalIcon').innerHTML = course.icon;
    document.getElementById('modalIcon').style.backgroundColor = course.color + '20';
    document.getElementById('modalTitle').textContent = course.title;
    document.getElementById('modalDescription').textContent = course.fullDescription;
    document.getElementById('modalDuration').textContent = course.duration;
    document.getElementById('modalStudents').textContent = course.students;
    document.getElementById('modalPrice').textContent = '$' + course.price.toFixed(2);

    modal.classList.add('active');
}

// Close modal
function closeCourseModal() {
    const modal = document.getElementById('courseModal');
    modal.classList.remove('active');
}

// Confirm enrollment and go to payment
function confirmEnrollment() {
    if (selectedCourse) {
        // Store course data in localStorage
        localStorage.setItem('selectedCourse', JSON.stringify(selectedCourse));
        // Redirect to payment page
        window.location.href = 'payment.html';
    }
}

// Event listeners
document.getElementById('closeModal').addEventListener('click', closeCourseModal);
document.getElementById('confirmEnrollment').addEventListener('click', confirmEnrollment);

// Close modal when clicking outside
document.getElementById('courseModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeCourseModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCourseModal();
    }
});

// Initialize
renderCourses();
