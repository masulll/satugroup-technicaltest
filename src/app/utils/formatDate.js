export const formatDate = (dateString) => {
  const options = {
    weekday: "short",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone: "Asia/Jakarta",
  };

  return new Date(dateString).toLocaleDateString("id-ID", options);
};
