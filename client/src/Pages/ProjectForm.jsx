import { useState } from "react";
import "../Pages/projectForm.css";
import { validateProjectForm, validateField } from "./validation"; // Adjust path as needed

export default function ProjectPortfolioForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    description: "",
    techStack: "",
    liveUrl: "",
    gitUrl: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldError = validateField(name, value);
    if (fieldError) {
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { isValid, errors: validationErrors } = validateProjectForm(formData);
    
    if (isValid) {
      try {
        const processedData = {
          ...formData,
          techStack: formData.techStack
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean),
        };
        
        await onSubmit(processedData);
        console.log("Portfolio project saved:", processedData);
      } catch (error) {
        console.error("Submit error:", error);
        setErrors({ submit: "Failed to save project. Please try again." });
      }
    } else {
      setErrors(validationErrors);
    }

    setIsSubmitting(false);
  };

  const hasErrors = Object.keys(errors).length > 0 && !errors.submit;

  return (
    <div className="ppf-page">
      <form className="ppf-card" onSubmit={handleSubmit} noValidate>
        <h2 className="ppf-title">Add portfolio project</h2>

        {errors.submit && (
          <div className="ppf-error ppf-full" style={{ backgroundColor: '#fee', color: '#c33', padding: '12px', borderRadius: '4px', marginBottom: '16px' }}>
            {errors.submit}
          </div>
        )}

        <div className="ppf-grid">
          <label className="ppf-field">
            <span>Project image URL</span>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="https://example.com/project-cover.png"
              className={errors.image ? "ppf-error-input" : ""}
              aria-invalid={!!errors.image}
            />
            {errors.image && (
              <span className="ppf-error-msg">{errors.image}</span>
            )}
          </label>

          <label className="ppf-field">
            <span>Project title</span>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Expense Tracker"
              maxLength={100}
              className={errors.title ? "ppf-error-input" : ""}
              aria-invalid={!!errors.title}
            />
            {errors.title && <span className="ppf-error-msg">{errors.title}</span>}
          </label>
        </div>

        <label className="ppf-field ppf-full">
          <span>Short description</span>
          <textarea
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Briefly describe what it does, key features, and value."
            maxLength={500}
            className={errors.description ? "ppf-error-input" : ""}
            aria-invalid={!!errors.description}
          />
          {errors.description && <span className="ppf-error-msg">{errors.description}</span>}
        </label>

        <label className="ppf-field ppf-full">
          <span>Tech stack (comma-separated)</span>
          <input
            type="text"
            name="techStack"
            value={formData.techStack}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="React, Node.js, Express.js, MongoDB"
            className={errors.techStack ? "ppf-error-input" : ""}
            aria-invalid={!!errors.techStack}
          />
          {errors.techStack && <span className="ppf-error-msg">{errors.techStack}</span>}
        </label>

        <div className="ppf-grid">
          <label className="ppf-field">
            <span>Live demo URL</span>
            <input
              type="url"
              name="liveUrl"
              value={formData.liveUrl}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="https://your-live-demo.com"
              className={errors.liveUrl ? "ppf-error-input" : ""}
              aria-invalid={!!errors.liveUrl}
            />
            {errors.liveUrl && <span className="ppf-error-msg">{errors.liveUrl}</span>}
          </label>

          <label className="ppf-field">
            <span>GitHub URL</span>
            <input
              type="url"
              name="gitUrl"
              value={formData.gitUrl}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="https://github.com/your-repo"
              className={errors.gitUrl ? "ppf-error-input" : ""}
              aria-invalid={!!errors.gitUrl}
            />
            {errors.gitUrl && <span className="ppf-error-msg">{errors.gitUrl}</span>}
          </label>
        </div>

        <div className="ppf-actions">
          <button 
            type="submit" 
            disabled={isSubmitting || hasErrors}
          >
            {isSubmitting ? "Saving..." : "Save project"}
          </button>
        </div>
      </form>
    </div>
  );
}
