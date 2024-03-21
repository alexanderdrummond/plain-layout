const NotificationBox: React.FC = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center rounded-pill"
      style={{
        backgroundColor: "#FEE2E2",
        color: "#EF4444",
        minHeight: "30px",
        width: "30%",
      }}
    >
      <p className="mb-0 medium p-1">Vigtigt! Du har en ny anbefaling</p>
    </div>
  );
};

export default NotificationBox;
