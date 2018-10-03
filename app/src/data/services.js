const services = [
  {
    index: 0,
    title: 'Welcome',
    image: 'titled_logo.svg',
    status: 'complete',
  },
  {
    index: 1,
    title: 'Public Safety',
    image: 'public_safety.svg',
    desc:
      "The community's safety and security is a top priority for City of Savannah leaders. Public safety made up nearly 70% of the City's general fund budget, providing for police, fire, EMS and municipal court services",
    departments: [1, 2],
    status: 'ready',
  },
  {
    index: 2,
    title: 'Infrastructure & Development',
    image: 'development.svg',
    desc:
      'The City of Savannah provides a mix of services to foster economic vibrancy, ensure the quality of new development and preserve of our natural resources.',
    departments: [3, 4, 5],
    percentChange: null,
    completeSections: 0,
  },
  {
    index: 3,
    title: 'Community Services',
    image: 'community_services.svg',
    desc:
      'The City of Savannah is committed to promoting healthy, livable, communities with access to housing and libraries.  The budget covers costs for the Health and Human Services Department, the Savannah Public Library, the Animal Services Department, the Parks and Recreation Department, the Code Department, Social Service Contracts and the Neighborhood Housing and Community Development Department.',
    departments: [6, 7, 8],
  },
{
    index: 4,
    title: 'Municipal Operations',
    image: 'community_services.svg',
    desc:
      'The City of Savannah prioritzes improving its performance and service delivery efficiency for maximum benefit to residents. The Municipal Operations service center oversees Real Estate Services, Recorders Court, Financial Services, and Information Technology.',
    departments: [9, 10, 11],
  },
{
    index: 5,
    title: 'Transfers',
    image: 'infrastructure.svg',
    desc:
      'Transfers are payments from general fund departments to non-general fund departments for services provided.  Examples include: the 311 call center, IT support, utility billing support, or professional training.',
    departments: [12, 13, 14],
  },
  {
    index: 6,
    title: 'Budget Submission',
    image: 'envelope.svg',
    departments: [],
  },
];

export default services;
