export const pricingDemoData = {
  id: 1,
  title: "Supercharge your teamwork. Start free.",
  description: "Unlimited boards and workflows. No credit card needed.",
  items: [
    // {
    //   id: 1,
    //   title: "Individual",
    //   price: "0",
    //   monthlyPrice: "24",
    //   billingDuration: "Billed annually",
    //   shortIntro: "Manage all your teams work in one place",
    //   features: {
    //     id: 1,
    //     title: "Individual plan includes:",
    //     lists: [
    //       {
    //         id: 1,
    //         title: "Unlimited free viewers",
    //       },
    //       {
    //         id: 2,
    //         title: "Unlimited items",
    //       },
    //       {
    //         id: 3,
    //         title: "5 GB file storage",
    //       },
    //       {
    //         id: 4,
    //         title: "Prioritised customer support",
    //       },
    //     ],
    //   },
    // },
    {
      id: 2,
      title: "Basic",
      price: "30",
      monthlyPrice: "24",
      billingDuration: "Billed annually",
      shortIntro: "Manage all your teams’ work in one place",
      features: {
        id: 1,
        title: "Basic plan includes:",
        lists: [
          {
            id: 1,
            title: "Unlimited free guests",
          },
          {
            id: 2,
            title: "Unlimited teams",
          },
          {
            id: 3,
            title: "5 GB file storage",
          },
          {
            id: 4,
            title: "Prioritised customer support",
          },
        ],
      },
    },
    {
      id: 3,
      title: "Standard",
      price: "50",
      monthlyPrice: "24",
      billingDuration: "Billed annually",
      shortIntro: "Manage all your teams’ work in one place",
      features: {
        id: 1,
        title: "Includes Basic, plus:",
        lists: [
          {
            id: 1,
            title: "Unlimited free guests",
          },
          {
            id: 2,
            title: "Unlimited teams",
          },
          {
            id: 3,
            title: "10 GB file storage",
          },
          {
            id: 4,
            title: "Prioritized customer support",
          },
        ],
      },
    },
    {
      id: 4,
      title: "Premium",
      price: "100",
      monthlyPrice: "24",
      billingDuration: "Billed annually",
      shortIntro: "Manage all your teams’ work in one place",
      features: {
        id: 1,
        title: "Includes Standard, plus:",
        lists: [
          {
            id: 1,
            title: "Unlimited free guests",
          },
          {
            id: 2,
            title: "Unlimited teams",
          },
          {
            id: 3,
            title: "20 GB file storage",
          },
          {
            id: 4,
            title: "Prioritized customer support",
          },
        ],
      },
    },
    {
      id: 5,
      title: "Enterprise",
      // price: "Ask",
      icon: "/enterprise.png",
      // monthlyPrice: "24",
      // billingDuration: "Billed annually",
      shortIntro: "Manage all your teams’ work in one place",
      features: {
        id: 1,
        title: "Includes Premium, plus:",
        lists: [
          {
            id: 1,
            title: "Unlimited free guests",
          },
          {
            id: 2,
            title: "Unlimited teams",
          },
          {
            id: 3,
            title: "Dedicated account manager",
          },
          {
            id: 4,
            title: "Customized training",
          },
          {
            id: 5,
            title: "Prioritized customer support",
          },
        ],
      },
    },
  ],
  completeFeatures: {
    id: 1,
    title: "Complete features",
    categories: [
      // {
      //   id: 1,
      //   title: "Individual",
      // },
      {
        id: 2,
        title: "Basic",
      },
      {
        id: 3,
        title: "Standard",
      },
      {
        id: 4,
        title: "Premium",
      },
      {
        id: 5,
        title: "Enterprise",
      },
    ],
    subCategories: [
      {
        id: 1,
        title: "Essentials",
        lists: [
          {
            id: 1,
            title: "Number of users",
            items: [
              {
                id: 1,
                title: "Unlimited",
              },
              {
                id: 2,
                title: "Unlimited",
              },
              {
                id: 3,
                title: "Unlimited",
              },
              {
                id: 4,
                title: "Unlimited",
              },
              // {
              //   id: 5,
              //   title: "Unlimited",
              // },
            ],
          },
          {
            id: 2,
            title: "Storage",
            items: [
              {
                id: 1,
                title: "5 GB",
              },
              {
                id: 2,
                title: "10 GB",
              },
              {
                id: 3,
                title: "20 GB",
              },
              {
                id: 4,
                title: "Ask",
              },
              // {
              //   id: 5,
              //   title: "Ask",
              // },
            ],
          },
          {
            id: 3,
            title: "Whit Label Branding",
            items: [
              {
                id: 1,
                isAvailable: true,
              },
              {
                id: 2,
                isAvailable: true,
              },
              {
                id: 3,
                isAvailable: true,
              },
              {
                id: 4,
                isAvailable: true,
              },
              // {
              //   id: 5,
              //   isAvailable: true,
              // },
            ],
          },
          {
            id: 4,
            title: "Kanban Board",
            items: [
              {
                id: 1,
                title: "Unlimited",
              },
              {
                id: 2,
                title: "Unlimited",
              },
              {
                id: 3,
                title: "Unlimited",
              },
              {
                id: 4,
                title: "Unlimited",
              },
              // {
              //   id: 5,
              //   title: "5 years",
              // },
            ],
          },
          {
            id: 5,
            title: "Dashboard",
            items: [
              {
                id: 1,
                title: "Unlimited",
              },
              {
                id: 2,
                title: "Unlimited",
              },
              {
                id: 3,
                title: "Unlimited",
              },
              {
                id: 4,
                title: "Unlimited",
              },
              // {
              //   id: 5,
              //   title: "Unlimited",
              // },
            ],
          },
          {
            id: 6,
            title: "Gantt Chart",
            items: [
              {
                id: 1,
                title: "Unlimited",
              },
              {
                id: 2,
                title: "Unlimited",
              },
              {
                id: 3,
                title: "Unlimited",
              },
              {
                id: 4,
                title: "Unlimited",
              },
              // {
              //   id: 5,
              //   title: "Unlimited",
              // },
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Collaboration",
        lists: [
          {
            id: 7,
            title: "Calendar View",
            items: [
              {
                id: 1,
                title: "Unlimited",
              },
              {
                id: 2,
                title: "Unlimited",
              },
              {
                id: 3,
                title: "Unlimited",
              },
              {
                id: 4,
                title: "Unlimited",
              },
              // {
              //   id: 5,
              //   title: "Unlimited",
              // },
            ],
          },
          {
            id: 8,
            title: "Live Chat Communication",
            items: [
              {
                id: 1,
                title: "Unlimited",
              },
              {
                id: 2,
                title: "Unlimited",
              },
              {
                id: 3,
                title: "Unlimited",
              },
              {
                id: 4,
                title: "Unlimited",
              },
              // {
              //   id: 5,
              //   title: "Unlimited",
              // },
            ],
          },
          {
            id: 9,
            title: "Bill & Invoice Management",
            items: [
              {
                id: 1,
                title: "Unlimited",
              },
              {
                id: 2,
                title: "Unlimited",
              },
              {
                id: 3,
                title: "Unlimited",
              },
              {
                id: 4,
                title: "Unlimited",
              },
              // {
              //   id: 5,
              //   title: "Unlimited",
              // },
            ],
          },
          {
            id: 10,
            title: "Expense Management",
            items: [
              {
                id: 1,
                title: "Unlimited",
              },
              {
                id: 2,
                title: "Unlimited",
              },
              {
                id: 3,
                title: "Unlimited",
              },
              {
                id: 4,
                title: "Unlimited",
              },
              // {
              //   id: 5,
              //   title: "Unlimited",
              // },
            ],
          },
          {
            id: 11,
            title: "Issue Tracking",
            items: [
              {
                id: 1,
                title: "Unlimited",
              },
              {
                id: 2,
                title: "Unlimited",
              },
              {
                id: 3,
                title: "Unlimited",
              },
              {
                id: 4,
                title: "Unlimited",
              },
              // {
              //   id: 5,
              //   title: "Unlimited",
              // },
            ],
          },
          {
            id: 12,
            title: "Time Tracking",
            items: [
              {
                id: 1,
                title: "Unlimited",
              },
              {
                id: 2,
                title: "Unlimited",
              },
              {
                id: 3,
                title: "Unlimited",
              },
              {
                id: 4,
                title: "Unlimited",
              },
              // {
              //   id: 5,
              //   title: "Unlimited",
              // },
            ],
          },
          {
            id: 13,
            title: "Document Management",
            items: [
              {
                id: 1,
                title: "Unlimited",
              },
              {
                id: 2,
                title: "Unlimited",
              },
              {
                id: 3,
                title: "Unlimited",
              },
              {
                id: 4,
                title: "Unlimited",
              },
              // {
              //   id: 5,
              //   title: "Unlimited",
              // },
            ],
          },
          {
            id: 14,
            title: "Program Details",
            items: [
              {
                id: 1,
                title: "Unlimited",
              },
              {
                id: 2,
                title: "Unlimited",
              },
              {
                id: 3,
                title: "Unlimited",
              },
              {
                id: 4,
                title: "Unlimited",
              },
              // {
              //   id: 5,
              //   title: "Unlimited",
              // },
            ],
          },
          {
            id: 15,
            title: "Task Details",
            items: [
              {
                id: 1,
                title: "Unlimited",
              },
              {
                id: 2,
                title: "Unlimited",
              },
              {
                id: 3,
                title: "Unlimited",
              },
              {
                id: 4,
                title: "Unlimited",
              },
              // {
              //   id: 5,
              //   title: "Unlimited",
              // },
            ],
          },
          {
            id: 16,
            title: "Project Details",
            items: [
              {
                id: 1,
                title: "Unlimited",
              },
              {
                id: 2,
                title: "Unlimited",
              },
              {
                id: 3,
                title: "Unlimited",
              },
              {
                id: 4,
                title: "Unlimited",
              },
              // {
              //   id: 5,
              //   title: "Unlimited",
              // },
            ],
          },
          {
            id: 17,
            title: "Project Budget",
            items: [
              {
                id: 1,
                title: "Unlimited",
              },
              {
                id: 2,
                title: "Unlimited",
              },
              {
                id: 3,
                title: "Unlimited",
              },
              {
                id: 4,
                title: "Unlimited",
              },
              // {
              //   id: 5,
              //   title: "Unlimited",
              // },
            ],
          },
          {
            id: 18,
            title: "Task Budget",
            items: [
              {
                id: 1,
                title: "Unlimited",
              },
              {
                id: 2,
                title: "Unlimited",
              },
              {
                id: 3,
                title: "Unlimited",
              },
              {
                id: 4,
                title: "Unlimited",
              },
              // {
              //   id: 5,
              //   title: "Unlimited",
              // },
            ],
          },
          {
            id: 19,
            title: "Project Discussion",
            items: [
              {
                id: 1,
                title: "Unlimited",
              },
              {
                id: 2,
                title: "Unlimited",
              },
              {
                id: 3,
                title: "Unlimited",
              },
              {
                id: 4,
                title: "Unlimited",
              },
              // {
              //   id: 5,
              //   title: "Unlimited",
              // },
            ],
          },
          {
            id: 20,
            title: "Task Discussion",
            items: [
              {
                id: 1,
                title: "Unlimited",
              },
              {
                id: 2,
                title: "Unlimited",
              },
              {
                id: 3,
                title: "Unlimited",
              },
              {
                id: 4,
                title: "Unlimited",
              },
              // {
              //   id: 5,
              //   title: "Unlimited",
              // },
            ],
          },
          {
            id: 21,
            title: "VAT-TAX Management",
            items: [
              {
                id: 1,
                isAvailable: true,
              },
              {
                id: 2,
                isAvailable: true,
              },
              {
                id: 3,
                isAvailable: true,
              },
              {
                id: 4,
                isAvailable: true,
              },
              // {
              //   id: 5,
              //   isAvailable: true,
              // },
            ],
          },
          {
            id: 22,
            title: "Income Management",
            items: [
              {
                id: 1,
                isAvailable: true,
              },
              {
                id: 2,
                isAvailable: true,
              },
              {
                id: 3,
                isAvailable: true,
              },
              {
                id: 4,
                isAvailable: true,
              },
              // {
              //   id: 5,
              //   isAvailable: true,
              // },
            ],
          },
          {
            id: 23,
            title: "Los-Profit Calculation",
            items: [
              {
                id: 1,
                isAvailable: true,
              },
              {
                id: 2,
                isAvailable: true,
              },
              {
                id: 3,
                isAvailable: true,
              },
              {
                id: 4,
                isAvailable: true,
              },
              // {
              //   id: 5,
              //   isAvailable: true,
              // },
            ],
          },
          {
            id: 24,
            title: "Budget-Cost Comparison",
            items: [
              {
                id: 1,
                isAvailable: true,
              },
              {
                id: 2,
                isAvailable: true,
              },
              {
                id: 3,
                isAvailable: true,
              },
              {
                id: 4,
                isAvailable: true,
              },
              // {
              //   id: 5,
              //   isAvailable: true,
              // },
            ],
          },
          {
            id: 25,
            title: "Requisition Management",
            items: [
              {
                id: 1,
                title: " Unlimited",
              },
              {
                id: 2,
                title: " Unlimited",
              },
              {
                id: 3,
                title: " Unlimited",
              },
              {
                id: 4,
                title: " Unlimited",
              },
              // {
              //   id: 5,
              //   title: " Unlimited",
              // },
            ],
          },
          {
            id: 26,
            title: "Client Control Panel",
            items: [
              {
                id: 1,
                title: " Full Access",
              },
              {
                id: 2,
                title: " Full Access",
              },
              {
                id: 3,
                title: " Full Access",
              },
              {
                id: 4,
                title: " Full Access",
              },
              // {
              //   id: 5,
              //   title: " Full Access",
              // },
            ],
          },
          {
            id: 27,
            title: "Vendor Control Panel",
            items: [
              {
                id: 1,
                title: " Full Access",
              },
              {
                id: 2,
                title: " Full Access",
              },
              {
                id: 3,
                title: " Full Access",
              },
              {
                id: 4,
                title: " Full Access",
              },
              // {
              //   id: 5,
              //   title: " Full Access",
              // },
            ],
          },
          {
            id: 28,
            title: "Role Based User permission",
            items: [
              {
                id: 1,
                isAvailable: true,
              },
              {
                id: 2,
                isAvailable: true,
              },
              {
                id: 3,
                isAvailable: true,
              },
              {
                id: 4,
                isAvailable: true,
              },
              // {
              //   id: 5,
              //   isAvailable: true,
              // },
            ],
          },
          {
            id: 29,
            title: "Approvals",
            items: [
              {
                id: 1,
                title: "Everywhere",
              },
              {
                id: 2,
                title: "Everywhere",
              },
              {
                id: 3,
                title: "Everywhere",
              },
              {
                id: 4,
                title: "Everywhere",
              },
              // {
              //   id: 5,
              //   title: "Everywhere",
              // },
            ],
          },
          {
            id: 30,
            title: "2 Step Verification",
            items: [
              {
                id: 1,
                isAvailable: true,
              },
              {
                id: 2,
                isAvailable: true,
              },
              {
                id: 3,
                isAvailable: true,
              },
              {
                id: 4,
                isAvailable: true,
              },
              // {
              //   id: 5,
              //   isAvailable: true,
              // },
            ],
          },
          {
            id: 31,
            title: "File Attachment",
            items: [
              {
                id: 1,
                title: "50 MB",
              },
              {
                id: 2,
                title: "50 MB",
              },
              {
                id: 3,
                title: "50 MB",
              },
              {
                id: 4,
                title: "50 MB",
              },
              // {
              //   id: 5,
              //   title: "50 MB",
              // },
            ],
          },
          {
            id: 32,
            title: "Admin Control",
            items: [
              {
                id: 1,
                isAvailable: true,
              },
              {
                id: 2,
                isAvailable: true,
              },
              {
                id: 3,
                isAvailable: true,
              },
              {
                id: 4,
                isAvailable: true,
              },
              // {
              //   id: 5,
              //   isAvailable: true,
              // },
            ],
          },
          {
            id: 33,
            title: "Workloads",
            items: [
              {
                id: 1,
                isAvailable: true,
              },
              {
                id: 2,
                isAvailable: true,
              },
              {
                id: 3,
                isAvailable: true,
              },
              {
                id: 4,
                isAvailable: true,
              },
              // {
              //   id: 5,
              //   isAvailable: true,
              // },
            ],
          },
          {
            id: 34,
            title: "Notifications",
            items: [
              {
                id: 1,
                isAvailable: true,
              },
              {
                id: 2,
                isAvailable: true,
              },
              {
                id: 3,
                isAvailable: true,
              },
              {
                id: 4,
                isAvailable: true,
              },
              // {
              //   id: 5,
              //   isAvailable: true,
              // },
            ],
          },
          {
            id: 35,
            title: "Create General Teams and Sub-teams",
            items: [
              {
                id: 1,
                title: "Unlimited",
              },
              {
                id: 2,
                title: "Unlimited",
              },
              {
                id: 3,
                title: "Unlimited",
              },
              {
                id: 4,
                title: "Unlimited",
              },
              // {
              //   id: 5,
              //   title: "Unlimited",
              // },
            ],
          },
          {
            id: 36,
            title: "Assignee and Due Dates",
            items: [
              {
                id: 1,
                isAvailable: true,
              },
              {
                id: 2,
                isAvailable: true,
              },
              {
                id: 3,
                isAvailable: true,
              },
              {
                id: 4,
                isAvailable: true,
              },
              // {
              //   id: 5,
              //   isAvailable: true,
              // },
            ],
          },
          {
            id: 37,
            title: "Start Dates and Times",
            items: [
              {
                id: 1,
                isAvailable: true,
              },
              {
                id: 2,
                isAvailable: true,
              },
              {
                id: 3,
                isAvailable: true,
              },
              {
                id: 4,
                isAvailable: true,
              },
              // {
              //   id: 5,
              //   isAvailable: true,
              // },
            ],
          },
          {
            id: 38,
            title: "Advanced Search",
            items: [
              {
                id: 1,
                isAvailable: true,
              },
              {
                id: 2,
                isAvailable: true,
              },
              {
                id: 3,
                isAvailable: true,
              },
              {
                id: 4,
                isAvailable: true,
              },
              // {
              //   id: 5,
              //   isAvailable: true,
              // },
            ],
          },
          {
            id: 39,
            title: "Unlimited Free Guests",
            items: [
              {
                id: 1,
                isAvailable: true,
              },
              {
                id: 2,
                isAvailable: true,
              },
              {
                id: 3,
                isAvailable: true,
              },
              {
                id: 4,
                isAvailable: true,
              },
              // {
              //   id: 5,
              //   isAvailable: true,
              // },
            ],
          },
          {
            id: 40,
            title: "Priority Setup",
            items: [
              {
                id: 1,
                isAvailable: true,
              },
              {
                id: 2,
                isAvailable: true,
              },
              {
                id: 3,
                isAvailable: true,
              },
              {
                id: 4,
                isAvailable: true,
              },
              // {
              //   id: 5,
              //   isAvailable: true,
              // },
            ],
          },
          {
            id: 41,
            title: "Task Level Setup",
            items: [
              {
                id: 1,
                isAvailable: true,
              },
              {
                id: 2,
                isAvailable: true,
              },
              {
                id: 3,
                isAvailable: true,
              },
              {
                id: 4,
                isAvailable: true,
              },
              // {
              //   id: 5,
              //   isAvailable: true,
              // },
            ],
          },
          {
            id: 42,
            title: "Task & Project Archive",
            items: [
              {
                id: 1,
                isAvailable: true,
              },
              {
                id: 2,
                isAvailable: true,
              },
              {
                id: 3,
                isAvailable: true,
              },
              {
                id: 4,
                isAvailable: true,
              },
              // {
              //   id: 5,
              //   isAvailable: true,
              // },
            ],
          },
          {
            id: 43,
            title: "Change Log History",
            items: [
              {
                id: 1,
                isAvailable: true,
              },
              {
                id: 2,
                isAvailable: true,
              },
              {
                id: 3,
                isAvailable: true,
              },
              {
                id: 4,
                isAvailable: true,
              },
              // {
              //   id: 5,
              //   isAvailable: true,
              // },
            ],
          },
          {
            id: 44,
            title: "IOS & Android Apps",
            items: [
              {
                id: 1,
                isAvailable: true,
              },
              {
                id: 2,
                isAvailable: true,
              },
              {
                id: 3,
                isAvailable: true,
              },
              {
                id: 4,
                isAvailable: true,
              },
              // {
              //   id: 5,
              //   isAvailable: true,
              // },
            ],
          },
          {
            id: 45,
            title: "Dedicated Account Manager",
            items: [
              {
                id: 1,
                isAvailable: false,
              },
              {
                id: 2,
                isAvailable: false,
              },
              {
                id: 3,
                isAvailable: true,
              },
              {
                id: 4,
                isAvailable: true,
              },
              // {
              //   id: 5,
              //   isAvailable: true,
              // },
            ],
          },
          {
            id: 46,
            title: "Customized Training",
            items: [
              {
                id: 1,
                isAvailable: false,
              },
              {
                id: 2,
                isAvailable: false,
              },
              {
                id: 3,
                isAvailable: true,
              },
              {
                id: 4,
                isAvailable: true,
              },
              // {
              //   id: 5,
              //   isAvailable: true,
              // },
            ],
          },
          {
            id: 47,
            title: "Security Review",
            items: [
              {
                id: 1,
                isAvailable: true,
              },
              {
                id: 2,
                isAvailable: true,
              },
              {
                id: 3,
                isAvailable: true,
              },
              {
                id: 4,
                isAvailable: true,
              },
              // {
              //   id: 5,
              //   isAvailable: true,
              // },
            ],
          },
          {
            id: 48,
            title: "Uptime SLA",
            items: [
              {
                id: 1,
                isAvailable: true,
              },
              {
                id: 2,
                isAvailable: true,
              },
              {
                id: 3,
                isAvailable: true,
              },
              {
                id: 4,
                isAvailable: true,
              },
              // {
              //   id: 5,
              //   isAvailable: true,
              // },
            ],
          },
        ],
      },
    ],
  },
};

// export const pricingDemoData = {
//     "id":1,
//     "isShow": true,
//     "title": "Clean, Simple and Transparent Pricing",
//     "description": "Make things easier for your business.",
//     "items": [
//         {
//             id: 1,
//             isShow: true,
//             title: 'Intro',
//             description: 'Power up your business',
//             price: '20',
//             features: [
//                 {
//                     name: 'All limited links'
//                 },
//                 {
//                     name: 'Customer support'
//                 },
//                 {
//                     name: 'Unlimited Teams'
//                 },
//                 {
//                     name: 'No ads'
//                 },
//                 {
//                     name: 'Real-time stats'
//                 },
//                 {
//                     name: 'Enhanced Performance'
//                 },
//             ]
//         },
//         {
//             id: 2,
//             isShow: true,
//             title: 'Popular',
//             description: 'Power up your business',
//             price: '59',
//             features: [
//                 {
//                     name: 'All limited links'
//                 },
//                 {
//                     name: 'Customer support'
//                 },
//                 {
//                     name: 'Unlimited Teams'
//                 },
//                 {
//                     name: 'No ads'
//                 },
//                 {
//                     name: 'Real-time stats'
//                 },
//                 {
//                     name: 'Enhanced Performance'
//                 },
//             ]
//         },
//         {
//             id: 3,
//             isShow: true,
//             title: 'Best deal',
//             description: 'Power up your business',
//             price: '99',
//             status: 'active',
//             features: [
//                 {
//                     name: 'All limited links'
//                 },
//                 {
//                     name: 'Customer support'
//                 },
//                 {
//                     name: 'Unlimited Teams'
//                 },
//                 {
//                     name: 'No ads'
//                 },
//                 {
//                     name: 'Real-time stats'
//                 },
//                 {
//                     name: 'Enhanced Performance'
//                 },
//             ]
//         },
//         {
//             id: 4,
//             isShow: true,
//             title: 'Enterprise',
//             description: 'Power up your business',
//             price: '299',
//             features: [
//                 {
//                     name: 'All limited links'
//                 },
//                 {
//                     name: 'Customer support'
//                 },
//                 {
//                     name: 'Unlimited Teams'
//                 },
//                 {
//                     name: 'No ads'
//                 },
//                 {
//                     name: 'Real-time stats'
//                 },
//                 {
//                     name: 'Enhanced Performance'
//                 },
//             ]
//         },
//     ]
// }
