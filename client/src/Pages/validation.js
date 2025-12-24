// validation.js - Pure validation utilities (no external libraries)
export const validateProjectForm = (formData) => {
  const errors = {};

  // Image URL validation
  if (!formData.image) {
    errors.image = "Project image URL is required";
  } else if (!/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)(\?.*)?$/.test(formData.image)) {
    errors.image = "Please enter a valid image URL (jpg, png, gif, webp)";
  }

  // Title validation
  if (!formData.title) {
    errors.title = "Project title is required";
  } else if (formData.title.length < 3 || formData.title.length > 100) {
    errors.title = "Title must be 3-100 characters long";
  }

  // Description validation
  if (!formData.description) {
    errors.description = "Description is required";
  } else if (formData.description.length < 10 || formData.description > 500) {
    errors.description = "Description must be 10-500 characters long";
  }

  // Tech stack validation
  if (!formData.techStack.trim()) {
    errors.techStack = "At least one technology is required";
  } else {
    const techs = formData.techStack.split(",").map(t => t.trim()).filter(Boolean);
    if (techs.length === 0 || techs.length > 10) {
      errors.techStack = "Add 1-10 technologies (comma-separated)";
    }
  }

  // Live URL validation
  if (!formData.liveUrl) {
    errors.liveUrl = "Live demo URL is required";
  } else if (!/^https?:\/\/.+/.test(formData.liveUrl)) {
    errors.liveUrl = "Please enter a valid URL starting with http:// or https://";
  }

  // GitHub URL validation
  if (!formData.gitUrl) {
    errors.gitUrl = "GitHub URL is required";
  } else if (!/^https:\/\/github\.com\/.+/.test(formData.gitUrl)) {
    errors.gitUrl = "Please enter a valid GitHub repository URL";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateField = (name, value) => {
  const errors = {};

  switch (name) {
    case "image":
      if (!value) errors.image = "Project image URL is required";
      else if (!/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)(\?.*)?$/.test(value)) {
        errors.image = "Please enter a valid image URL (jpg, png, gif, webp)";
      }
      break;

    case "title":
      if (!value) errors.title = "Project title is required";
      else if (value.length < 3 || value.length > 100) {
        errors.title = "Title must be 3-100 characters long";
      }
      break;

    case "description":
      if (!value) errors.description = "Description is required";
      else if (value.length < 10 || value.length > 500) {
        errors.description = "Description must be 10-500 characters long";
      }
      break;

    case "techStack":
      if (!value.trim()) errors.techStack = "At least one technology is required";
      else {
        const techs = value.split(",").map(t => t.trim()).filter(Boolean);
        if (techs.length === 0 || techs.length > 10) {
          errors.techStack = "Add 1-10 technologies (comma-separated)";
        }
      }
      break;

    case "liveUrl":
      if (!value) errors.liveUrl = "Live demo URL is required";
      else if (!/^https?:\/\/.+/.test(value)) {
        errors.liveUrl = "Please enter a valid URL starting with http:// or https://";
      }
      break;

    case "gitUrl":
      if (!value) errors.gitUrl = "GitHub URL is required";
      else if (!/^https:\/\/github\.com\/.+/.test(value)) {
        errors.gitUrl = "Please enter a valid GitHub repository URL";
      }
      break;

    default:
      break;
  }

  return Object.keys(errors).length === 0 ? null : errors[name];
};
