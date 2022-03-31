import { useState } from "react";

export const useActionMessage = () => {
  const [isActive, setIsActive] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState({
    isActive: false,
    description: "",
  });

  const onCloseInactive = () => {
    setIsActive(false);
  };

  const onCloseActive = () => {
    setIsActive(true);
  };

  const onSetTitle = ({ title }) => {
    if (!title) return setError(true, "El titulo es requerido");

    setTitle(title);
    setError(false, "");
  };

  const onSetDescription = ({ description }) => {
    if (!description) return setError(true, "La descripción es requerida");

    setDescription(description);
    setError(false, "");
  };

  return {
    isActive,
    error,
    title,
    description,
    onCloseInactive,
    onCloseActive,
    onSetTitle,
    onSetDescription,
  };
};
