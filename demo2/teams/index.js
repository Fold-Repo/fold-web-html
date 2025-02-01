const teamMembers = [
  {
    name: "Patrick Omologbo",
    role: "Head of Marketing and Sales.",
    image: "../../assets/images/team-member1.svg",
  },
  {
    name: "Patrick Omologbo",
    role: "Head of Marketing and Sales.",
    image: "../../assets/images/team-member2.svg",
  },
  {
    name: "Patrick Omologbo",
    role: "Head of Marketing and Sales.",
    image: "../../assets/images/team-member3.svg",
  },
  {
    name: "Patrick Omologbo",
    role: "Head of Marketing and Sales.",
     image: "../../assets/images/team-member4.svg",
  },
  {
    name: "Patrick Omologbo",
    role: "Head of Marketing and Sales.",
    image: "../../assets/images/team-member1.svg",
  },
  {
    name: "Patrick Omologbo",
    role: "Head of Marketing and Sales.",
     image: "../../assets/images/team-member2.svg",
  },
];

const teamContainer = document.getElementById("team-container");
teamMembers.forEach((member) => {
  const memberDiv = document.createElement("div");
  memberDiv.classList.add("text-center");
  memberDiv.innerHTML = `
                <img src="${member.image}" alt="${member.name}" class="mx-auto object-cover rounded-lg">
              <div class="space-y-2 pl-12 lg:pl-0">
                   <h3 class="mt-4 text-start text-[#111827] font-semibold">${member.name}</h3>
                   <p class="text-[#111827]  text-start">${member.role}</p>
              </div>
            `;
  teamContainer.appendChild(memberDiv);
});
