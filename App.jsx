 import { useMemo, useState } from "react";
import logo from "./logo.png";

export default function App() {
  const content = {
    English: {
      navAssignments: "Assignments",
      navProgress: "Progress",
      navBadges: "Badges",
      weeklyBadges: "Weekly Badges Earned",
      submit: "Submit",
      submitted: "Submitted",
      locked: "Locked",
      complete: "Complete",
      language: "Language",
      pointsLabel: "points",
      lessons: [
        {
          id: "phishing-detective",
          title: "Phishing Detective",
          date: "August 30",
          icon: "🔎",
          status: "completed",
          description:
            "Spot a fake email. Highlight 3 red flags: sender, link, and attachment. Then write the safe response and explain why it is phishing.",
          taskType: "Scenario Analysis",
          points: 25,
          dueLabel: "Due: Aug 30",
        },
        {
          id: "cyber-stalking",
          title: "Cyber-Stalking",
          date: "September 3",
          icon: "🕵️",
          status: "in-progress",
          description:
            "Read a short online safety story, identify warning signs of cyber-stalking, and create 3 safety rules for students.",
          taskType: "Safety Reflection",
          points: 20,
          dueLabel: "Due: Sep 3",
        },
        {
          id: "social-network-safety",
          title: "Social Network Safety",
          date: "September 8",
          icon: "🛡️",
          status: "completed",
          description:
            "Review a sample social profile and list privacy settings, safe posting habits, and ways to protect personal information.",
          taskType: "Privacy Check",
          points: 20,
          dueLabel: "Due: Sep 8",
        },
        {
          id: "cyberbullying",
          title: "Cyberbullying",
          date: "September 12",
          icon: "💬",
          status: "completed",
          description:
            "Read two online messages, decide whether they are respectful or harmful, and write a positive digital citizenship response.",
          taskType: "Digital Citizenship",
          points: 20,
          dueLabel: "Due: Sep 12",
        },
        {
          id: "password-pro",
          title: "Password Pro",
          date: "September 17",
          icon: "🔑",
          status: "completed",
          description:
            "Build a strong password using a classroom formula, compare strong and weak passwords, and explain why password managers help.",
          taskType: "Skill Builder",
          points: 15,
          dueLabel: "Due: Sep 17",
        },
        {
          id: "ai-ethics-and-privacy",
          title: "AI Ethics and Privacy",
          date: "September 21",
          icon: "⭐",
          status: "locked",
          description:
            "Explore how AI tools use information, identify fair and unfair uses of AI, and explain one way to protect privacy online.",
          taskType: "Ethics Lesson",
          points: 30,
          dueLabel: "Unlock after 4 lessons",
        },
      ],
    },

    Spanish: {
      navAssignments: "Asignaciones",
      navProgress: "Progreso",
      navBadges: "Insignias",
      weeklyBadges: "Insignias Ganadas",
      submit: "Enviar",
      submitted: "Enviado",
      locked: "Bloqueado",
      complete: "Completado",
      language: "Idioma",
      pointsLabel: "puntos",
      lessons: [
        {
          id: "phishing-detective",
          title: "Detective de Phishing",
          date: "30 de agosto",
          icon: "🔎",
          status: "completed",
          description:
            "Detecta un correo falso. Marca 3 señales de alerta: remitente, enlace y archivo adjunto. Luego escribe la respuesta segura y explica por qué es phishing.",
          taskType: "Análisis de Escenario",
          points: 25,
          dueLabel: "Entrega: 30 de agosto",
        },
        {
          id: "cyber-stalking",
          title: "Ciberacoso Persistente",
          date: "3 de septiembre",
          icon: "🕵️",
          status: "in-progress",
          description:
            "Lee una historia breve sobre seguridad en línea, identifica señales de ciberacoso persistente y crea 3 reglas de seguridad para estudiantes.",
          taskType: "Reflexión de Seguridad",
          points: 20,
          dueLabel: "Entrega: 3 de septiembre",
        },
        {
          id: "social-network-safety",
          title: "Seguridad en Redes Sociales",
          date: "8 de septiembre",
          icon: "🛡️",
          status: "completed",
          description:
            "Revisa un perfil social de ejemplo y enumera configuraciones de privacidad, hábitos seguros al publicar y maneras de proteger la información personal.",
          taskType: "Revisión de Privacidad",
          points: 20,
          dueLabel: "Entrega: 8 de septiembre",
        },
        {
          id: "cyberbullying",
          title: "Ciberacoso",
          date: "12 de septiembre",
          icon: "💬",
          status: "completed",
          description:
            "Lee dos mensajes en línea, decide si son respetuosos o dañinos y escribe una respuesta positiva de ciudadanía digital.",
          taskType: "Ciudadanía Digital",
          points: 20,
          dueLabel: "Entrega: 12 de septiembre",
        },
        {
          id: "password-pro",
          title: "Experto en Contraseñas",
          date: "17 de septiembre",
          icon: "🔑",
          status: "completed",
          description:
            "Crea una contraseña segura usando una fórmula de clase, compara contraseñas fuertes y débiles, y explica por qué ayudan los gestores de contraseñas.",
          taskType: "Desarrollo de Habilidad",
          points: 15,
          dueLabel: "Entrega: 17 de septiembre",
        },
        {
          id: "ai-ethics-and-privacy",
          title: "Ética y Privacidad en IA",
          date: "21 de septiembre",
          icon: "⭐",
          status: "locked",
          description:
            "Explora cómo las herramientas de IA usan la información, identifica usos justos e injustos de la IA y explica una forma de proteger la privacidad en línea.",
          taskType: "Lección de Ética",
          points: 30,
          dueLabel: "Se desbloquea después de 4 lecciones",
        },
      ],
    },

    Arabic: {
      navAssignments: "المهام",
      navProgress: "التقدم",
      navBadges: "الشارات",
      weeklyBadges: "الشارات المكتسبة",
      submit: "إرسال",
      submitted: "تم الإرسال",
      locked: "مغلق",
      complete: "مكتمل",
      language: "اللغة",
      pointsLabel: "نقطة",
      lessons: [
        {
          id: "phishing-detective",
          title: "محقق التصيد",
          date: "30 أغسطس",
          icon: "🔎",
          status: "completed",
          description:
            "اكتشف رسالة بريد مزيفة. حدد 3 علامات تحذير: المرسل، الرابط، والمرفق. ثم اكتب الرد الآمن واشرح لماذا تعد هذه الرسالة تصيدًا.",
          taskType: "تحليل موقف",
          points: 25,
          dueLabel: "الموعد: 30 أغسطس",
        },
        {
          id: "cyber-stalking",
          title: "المطاردة الإلكترونية",
          date: "3 سبتمبر",
          icon: "🕵️",
          status: "in-progress",
          description:
            "اقرأ قصة قصيرة عن الأمان عبر الإنترنت، وحدد علامات المطاردة الإلكترونية، ثم اكتب 3 قواعد أمان للطلاب.",
          taskType: "تأمل في السلامة",
          points: 20,
          dueLabel: "الموعد: 3 سبتمبر",
        },
        {
          id: "social-network-safety",
          title: "أمان الشبكات الاجتماعية",
          date: "8 سبتمبر",
          icon: "🛡️",
          status: "completed",
          description:
            "راجع ملفًا اجتماعيًا نموذجيًا وحدد إعدادات الخصوصية، وعادات النشر الآمن، وطرق حماية المعلومات الشخصية.",
          taskType: "فحص الخصوصية",
          points: 20,
          dueLabel: "الموعد: 8 سبتمبر",
        },
        {
          id: "cyberbullying",
          title: "التنمر الإلكتروني",
          date: "12 سبتمبر",
          icon: "💬",
          status: "completed",
          description:
            "اقرأ رسالتين عبر الإنترنت، وقرر هل هما محترمتان أم مؤذيتان، ثم اكتب ردًا إيجابيًا يعكس المواطنة الرقمية.",
          taskType: "المواطنة الرقمية",
          points: 20,
          dueLabel: "الموعد: 12 سبتمبر",
        },
        {
          id: "password-pro",
          title: "محترف كلمات المرور",
          date: "17 سبتمبر",
          icon: "🔑",
          status: "completed",
          description:
            "أنشئ كلمة مرور قوية باستخدام طريقة صفية، وقارن بين كلمات المرور القوية والضعيفة، واشرح لماذا تساعد برامج إدارة كلمات المرور.",
          taskType: "بناء مهارة",
          points: 15,
          dueLabel: "الموعد: 17 سبتمبر",
        },
        {
          id: "ai-ethics-and-privacy",
          title: "أخلاقيات الذكاء الاصطناعي والخصوصية",
          date: "21 سبتمبر",
          icon: "⭐",
          status: "locked",
          description:
            "استكشف كيف تستخدم أدوات الذكاء الاصطناعي المعلومات، وحدد الاستخدامات العادلة وغير العادلة، واشرح طريقة واحدة لحماية الخصوصية عبر الإنترنت.",
          taskType: "درس أخلاقي",
          points: 30,
          dueLabel: "يفتح بعد 4 دروس",
        },
      ],
    },
  };

  const [language, setLanguage] = useState("English");
  const current = content[language];
  const lessons = current.lessons;

  const [selectedLessonId, setSelectedLessonId] = useState("phishing-detective");
  const [submitted, setSubmitted] = useState({
    "phishing-detective": false,
    "cyber-stalking": false,
    "social-network-safety": false,
    cyberbullying: false,
    "password-pro": false,
    "ai-ethics-and-privacy": false,
  });

  const selectedLesson = useMemo(
    () => lessons.find((lesson) => lesson.id === selectedLessonId) || lessons[0],
    [lessons, selectedLessonId]
  );

  const earnedBadges = lessons.filter(
    (lesson) => lesson.status === "completed" || submitted[lesson.id]
  );

  const progressPercent = Math.round((earnedBadges.length / lessons.length) * 100);

  const handleSubmit = () => {
    if (selectedLesson.status === "locked") return;
    setSubmitted((prev) => ({ ...prev, [selectedLesson.id]: true }));
  };

  const getButtonLabel = () => {
    if (selectedLesson.status === "locked") return current.locked;
    if (submitted[selectedLesson.id] || selectedLesson.status === "completed") {
      return current.submitted;
    }
    return current.submit;
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ececec",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          backgroundColor: "#0b6e4f",
          color: "white",
          padding: "18px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span style={{ fontSize: "32px", fontWeight: "bold" }}>Sprout</span>

          <img
            src={logo}
            alt="Sprout Logo"
            style={{
              height: "50px",
              width: "50px",
              objectFit: "contain",
              background: "transparent",
              display: "block",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: "18px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#assignments"
            style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
          >
            {current.navAssignments}
          </a>
          <a
            href="#progress"
            style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
          >
            {current.navProgress}
          </a>
          <a
            href="#badges"
            style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
          >
            {current.navBadges}
          </a>

          <label
            style={{
              color: "white",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {current.language}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              style={{
                padding: "8px",
                borderRadius: "8px",
                border: "none",
                fontWeight: "bold",
              }}
            >
              <option>English</option>
              <option>Spanish</option>
              <option>Arabic</option>
            </select>
          </label>
        </div>
      </header>

      <main
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "20px",
          padding: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <section
          id="assignments"
          style={{ background: "white", borderRadius: "20px", padding: "16px" }}
        >
          <h2
            style={{ fontSize: "30px", color: "#6d28d9", marginBottom: "16px" }}
          >
            {current.navAssignments}
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {lessons.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => setSelectedLessonId(lesson.id)}
                style={{
                  backgroundColor: "#0f766e",
                  color: "white",
                  border:
                    selectedLessonId === lesson.id
                      ? "3px solid #6d28d9"
                      : "none",
                  borderRadius: "16px",
                  padding: "14px",
                  textAlign: "left",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    color: "#111827",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    flexShrink: 0,
                  }}
                >
                  {lesson.icon}
                </div>

                <div>
                  <div style={{ fontWeight: "bold", fontSize: "18px" }}>
                    {lesson.title}
                  </div>
                  <div style={{ fontSize: "16px" }}>{lesson.date}</div>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section
          style={{ background: "white", borderRadius: "20px", padding: "24px" }}
        >
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "42px", marginBottom: "12px" }}>
              {selectedLesson.title}
            </h1>

            <div
              style={{
                width: "96px",
                height: "96px",
                borderRadius: "50%",
                margin: "0 auto 20px",
                backgroundColor: "#f8fafc",
                border: "4px solid #d1d5db",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "44px",
              }}
            >
              {selectedLesson.icon}
            </div>

            <p
              style={{
                fontSize: "26px",
                fontWeight: "600",
                lineHeight: 1.5,
                maxWidth: "700px",
                margin: "0 auto",
                color: "#111827",
              }}
            >
              {selectedLesson.description}
            </p>

            <div
              style={{
                marginTop: "18px",
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  background: "#e2e8f0",
                  padding: "8px 14px",
                  borderRadius: "999px",
                  color: "#111827",
                }}
              >
                {selectedLesson.taskType}
              </span>

              <span
                style={{
                  background: "#e2e8f0",
                  padding: "8px 14px",
                  borderRadius: "999px",
                  color: "#111827",
                }}
              >
                {selectedLesson.points} {current.pointsLabel}
              </span>

              <span
                style={{
                  background: "#e2e8f0",
                  padding: "8px 14px",
                  borderRadius: "999px",
                  color: "#111827",
                }}
              >
                {selectedLesson.dueLabel}
              </span>
            </div>

            <button
              onClick={handleSubmit}
              disabled={selectedLesson.status === "locked"}
              style={{
                marginTop: "24px",
                backgroundColor:
                  selectedLesson.status === "locked" ? "#94a3b8" : "#5b21b6",
                color: "white",
                border: "none",
                borderRadius: "12px",
                padding: "14px 28px",
                fontSize: "20px",
                fontWeight: "bold",
                cursor:
                  selectedLesson.status === "locked" ? "not-allowed" : "pointer",
              }}
            >
              {getButtonLabel()}
            </button>
          </div>

          <div
            style={{
              marginTop: "34px",
              background: "#f8fafc",
              borderRadius: "18px",
              padding: "20px",
            }}
          >
            <h3 style={{ fontSize: "28px", marginBottom: "16px" }}>
              {current.weeklyBadges}
            </h3>

            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #fde68a, #f9a8d4, #93c5fd)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "24px",
                }}
              >
                {progressPercent}% {current.complete}
              </div>

              <div>
                {earnedBadges.map((lesson) => (
                  <div
                    key={lesson.id}
                    style={{ marginBottom: "10px", fontSize: "18px" }}
                  >
                    ✅ {lesson.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="progress"
          style={{ background: "white", borderRadius: "20px", padding: "18px" }}
        >
          <h2 style={{ fontSize: "28px", marginBottom: "14px" }}>
            {current.navProgress}
          </h2>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}
          >
            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                style={{
                  background: "#f8fafc",
                  borderRadius: "16px",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "30px", marginBottom: "6px" }}>
                  {lesson.status === "locked" ? "🔒" : lesson.icon}
                </div>
                <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                  {lesson.title}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="badges"
          style={{ background: "white", borderRadius: "20px", padding: "18px" }}
        >
          <h2 style={{ fontSize: "28px", marginBottom: "14px" }}>
            {current.navBadges}
          </h2>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}
          >
            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                style={{
                  background: "#f8fafc",
                  borderRadius: "16px",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "30px", marginBottom: "6px" }}>
                  {lesson.status === "locked" ? "🔒" : "🏅"}
                </div>
                <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                  {lesson.status === "locked" ? current.locked : lesson.title}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}