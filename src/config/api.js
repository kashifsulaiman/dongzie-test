const BASE_URL = "http://funlearners-backend.demo.bonuspoint.info";

function getCourses(limit) {
    return new Promise((resolve, reject) => {
        fetch(`${BASE_URL}/ocmapi/courses/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"params": {"fields": [], "limit": limit, "offset": 1}, "jsonrpc": "2.0", "method": "call"})
        }).then(res => res.json())
        .then(res => resolve(res))
        .catch(e => reject(e));
    })
}

function getLessons(courseId) {
    return new Promise((resolve, reject) => {
        fetch(`${BASE_URL}/ocmapi/course_lessons/${courseId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"params": {"fields": []}, "jsonrpc": "2.0", "method": "call"})
        }).then(res => res.json())
        .then(res => resolve(res))
        .catch(e => reject(e));
    })
}

export {
    getCourses,
    getLessons
}