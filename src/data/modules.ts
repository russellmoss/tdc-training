// src/data/modules.ts
export interface ModuleContent {
  id: string;
  title: string;
  videoId: string;  // YouTube video ID
  description: string;
  exercise: string;
}

export interface Module {
  id: string;
  title: string;
  submodules?: ModuleContent[];
}

export const modules: Module[] = [
  {
    id: "unit1",
    title: "Unit 1 - Admin Training",
    submodules: [
      {
        id: "module1.1",
        title: "Module 1.1 - Creating a Customer",
        videoId: "u9LpLl5bNnI",
        description: "Learn how to create a new customer in the Thunder Dragon Club admin system.",
        exercise: "Tenzin Dorji who is the concierge at the Zhiwaling Heritage Hotel has come into the wine bar and wants to sign up for the Thunder Dragon Club. Go ahead and sign them up. Their information is as follows:\n\nName: Tenzin Dorji\nEmail: tenzin@zhiwalingheritage.com\nPhone number: 17451234\n\nWhat type of membership should Tenzin receive? Trade or non-trade?\n\nWhen you're done, search for him and find his membership to verify everything is there."
      },
      {
        id: "module1.2",
        title: "Module 1.2 - Transactions",
        videoId: "DEfVu5aEwH4",
        description: "Learn how to record transactions in the Thunder Dragon Club system.",
        exercise: "Tenzin Dorji has purchased a bottle of Chardonnay for 4300 Ngultrum and a Corkscrew for 400 Ngultrum. Please record that transaction in the system for Tenzin and verify that the points were applied correctly."
      },
      {
        id: "module1.3",
        title: "Module 1.3 - Referrals",
        videoId: "WgqPQO5o25s",
        description: "Learn how to manage referrals in the Thunder Dragon Club system.",
        exercise: "Tenzin Dorji has sent you two guests. Their names are John and Susanna Miller. They both have arrived at the wine bar and they both have referral cards from Tenzin. Please register them for their free tasting pour. Their information is as follows:\n\nName: John Miller\nEmail: jmiller1987@gmail.com\n\nName: Susanna Miller\nEmail: susanna420@aol.com\n\nAfter you register these referrals, verify that Tenzin Dorji has received his referral points in his account (check from the members tab, view details of his account and go to the bottom and look at the referral tab)"
      },
      {
        id: "module1.4",
        title: "Module 1.4 - Redemption",
        videoId: "2FcvExXWHLA",
        description: "Learn how to process redemptions in the Thunder Dragon Club system.",
        exercise: "Tenzin Dorji really likes the corkscrews at BWC wine bar and wants one for his mother. The corkscrews have a redemption value of 2000 points. Please apply that redemption.\n\nVerify that the redemption was applied by going to the members tab, finding Tenzin's profile and viewing the details and then go to the bottom and look at the redemptions tab and see that the redemption for the corkscrew is there."
      },
      {
        id: "module1.5",
        title: "Module 1.5 - Reporting",
        videoId: "QPFy4sK2XUY",
        description: "Learn how to generate and analyze reports in the Thunder Dragon Club system.",
        exercise: "Go to the reports. Export a PDF report for the current month. How many club members came from trade and non-trade this month? Trade members provide incredible value to the BWC Wine Bar. What are ways in which they provide value? What are a few ways in which we can attract more trade members? What are some ways in which we can incentivize trade members to provide more referrals to the wine bar? What are some ways in which we can show the trade members that we are appreciative of their efforts to bring us guests?"
      },
      {
        id: "module1.6",
        title: "Module 1.6 - Settings",
        videoId: "c3x3msQrBrk",
        description: "Learn how to configure settings in the Thunder Dragon Club system.",
        exercise: "It's January and you're seeing low tourist traffic and low revenue. You decide to incentivize local traffic by doubling the points you give people per ngultrum spent. Go and make this adjustment in the settings tab.\n\nYou have sent an email and text message campaign out to your TDC members announcing the double points for their purchases for January and February.\n\nYour loyal customer Tenzin Dorji is ecstatic and comes in and buys a bottle of Chardonnay for his wife. Record this transaction and ensure the new point multiplier for this transaction was applied by going to the member tab, finding Tenzin, viewing the details of his account and going down and looking at the transaction tab to see that the Chardonnay is there and the enhanced points were applied.\n\nNow, go back to the settings and export a CSV file for transactions. Calculate how much revenue you received from the Thunder Dragon Club in the Month of April of 2025."
      },
      {
        id: "module1.7",
        title: "Module 1.7 - Editing and Deleting Members",
        videoId: "160BO24VVd8",
        description: "Learn how to edit and delete member information in the Thunder Dragon Club system.",
        exercise: "Uh oh, Tenzin Dorji called us and said his email is wrong on his account. It's not tenzin@zhiwalingheritage.com, but it's tenzin.dorji@zhiwalingheritage.com\n\nAlso, he was looking at his account activity and you charged him 2000 points for the corkscrew that he got for his mother, but it says it's 1000 points on your website. So we owe him 1000 points back to his account. Can you apply a 1000 point refund to Tenzin's account for the typographical error when he redeemed the points for the corkscrew?\n\nGo into his account and change his email and adjust his points accordingly and verify that your changes applied."
      }
    ]
  },
  {
    id: "unit2",
    title: "Unit 2 - Frontend Training",
    submodules: [
      {
        id: "module2.1",
        title: "Module 2.1 - Creating an Account",
        videoId: "AaueYIHCcT0",
        description: "Learn how customers can create an account on the Thunder Dragon Club member portal.",
        exercise: "You are now Tenzin Dorji, the email for his account is tenzin.dorji@zhiwalingheritage.com\n\nNow go ahead and create a password for his account and login to the customer portal."
      },
      {
        id: "module2.2",
        title: "Module 2.2 - Customer Portal",
        videoId: "f9PNfVJGs1w",
        description: "Learn how to navigate the customer portal of the Thunder Dragon Club.",
        exercise: "Tenzin's email is actually tenzin@zhiwalingheritage.com. Can you change it back to how we had it originally? Also, how many points does he have in his account?\n\nWhen you are done, please go back to the admin dashboard and delete the Tenzin training customer entirely so that we can continue to use Tenzin Dorji for future trainings."
      }
    ]
  }
];

export const introduction = {
  title: "Introduction",
  content: `The Thunder Dragon Club (TDC) is a comprehensive loyalty program designed specifically for Bhutan Wine Company (BWC) to provide Bhutanese citizens with more affordable access to wine while building customer loyalty and creating a robust customer database for marketing purposes. The program operates on a dual-tier system that distinguishes between trade members (industry professionals from restaurants, hotels, and distributors) and non-trade members (regular customers), offering enhanced benefits to trade members to emphasize their importance to the business. Members earn points based on their purchases and referrals, which they can later redeem for products, discounts, or special offers at the BWC wine bar.

Our newly developed Thunder Dragon Club Management System consists of two integrated components: an administrative dashboard and a member-facing frontend. The admin dashboard empowers staff to manage all aspects of the loyalty program, including adding new members, recording transactions, processing referrals, handling point redemptions, and configuring point values. Through this dashboard, you'll be able to search for members, view their detailed history, make manual point adjustments, and export valuable data for marketing analysis and backup purposes. The member-facing frontend allows club members to log in to their accounts, view their current points balance, track their transaction history, and manage their profile information. During this training, you'll engage with both components through a series of practical scenarios designed to familiarize you with the full functionality of the system, from basic member management to advanced features like data export and system configuration.

The admin dashboard is located at - https://thunder-dragon.netlify.app/admin

The Member portal is located at - https://thunder-dragon.netlify.app

NOTE: There is no direct link from the member portal to the admin dashboard or vice versa, you must know the URL and that the admin dashboard is /admin. Also, members cannot access the admin dashboard, only those registered as admins

The following is series of exercises that you will go through in order to familiarize yourself with the system. Each module will have a Youtube video that demonstrates the process and then you will have an exercise to complete on your own demonstrating your mastery of the process.

The training is broken into Admin training, in which you learn the ins and outs of the admin platform and Frontend training, in which you see the system from the guest experience. You should allow 45 minutes to an hour for this training and it should be completed in one sitting.`
};

// Function to get all modules in a flat array
export const getAllModules = (): ModuleContent[] => {
  const allModules: ModuleContent[] = [];
  modules.forEach(unit => {
    if (unit.submodules) {
      unit.submodules.forEach(module => {
        allModules.push(module);
      });
    }
  });
  return allModules;
};

// Function to get the next module ID
export const getNextModuleId = (currentModuleId: string): string | null => {
  const allModules = getAllModules();
  const currentIndex = allModules.findIndex(module => module.id === currentModuleId);
  
  if (currentIndex === -1 || currentIndex === allModules.length - 1) {
    return null;
  }
  
  return allModules[currentIndex + 1].id;
};

// Function to get the previous module ID
export const getPreviousModuleId = (currentModuleId: string): string | null => {
  const allModules = getAllModules();
  const currentIndex = allModules.findIndex(module => module.id === currentModuleId);
  
  if (currentIndex === -1 || currentIndex === 0) {
    return null;
  }
  
  return allModules[currentIndex - 1].id;
}; 