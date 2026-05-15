export const mockRoutes = [
  {
    id: 1,
    type: 'jeepney',
    route: 'Toril Market → San Pedro',
    eta: 8,
    vehicle: 'Traditional Jeepney',
    status: 'AI Live Predict',
    statusPulse: true,
    seatsAvailable: 4,
    traffic: 'Moderate',
    passengerDemand: 'High',
    reliability: 92,
  },
  {
    id: 2,
    type: 'bus',
    route: 'Davao Interim Bus (DIBS) - Route 1',
    eta: 15,
    vehicle: 'Modern Bus',
    status: 'GPS Synced',
    statusPulse: false,
    seatsAvailable: 18,
    seatsTotal: 45,
    traffic: 'Light',
    passengerDemand: 'Medium',
    airconditioned: true,
  },
  {
    id: 3,
    type: 'bus',
    route: 'Express Bajada → Matina',
    eta: 12,
    vehicle: 'Express Bus',
    status: 'Route Optimized',
    statusPulse: true,
    seatsAvailable: 8,
    seatsTotal: 40,
    traffic: 'Moderate',
  },
]

export const searchSuggestions = ['Bankerohan', 'Toril', 'Roxas', 'SM City', 'San Pedro', 'Matina', 'Bajada']

export const insights = [
  {
    id: 1,
    title: 'Peak Congestion',
    time: '5:00 PM - 7:00 PM',
    severity: 'high',
    color: 'red',
  },
  {
    id: 2,
    title: 'Fastest Route Today',
    route: 'Toril → Roxas',
    reduction: '-32% wait time',
    color: 'green',
  },
  {
    id: 3,
    title: 'Demand Forecast',
    prediction: 'Heavy commuter flow in Bankerohan within 25 mins',
    color: 'blue',
  },
]

export const transactions = [
  { id: 1, type: 'Jeepney Fare', amount: 12.00, date: 'Today', status: 'completed' },
  { id: 2, type: 'Bus Fare', amount: 15.00, date: 'Yesterday', status: 'completed' },
  { id: 3, type: 'Rewards Cashback', amount: 2.50, date: '2 days ago', status: 'completed' },
]

export const hotspots = [
  { zone: 'Bankerohan', density: 'High', earnings: '+22%' },
  { zone: 'SM City', density: 'Medium', earnings: '+15%' },
  { zone: 'Matina', density: 'Low', earnings: '+8%' },
]
