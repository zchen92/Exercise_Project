# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Exercise.create([
    { day: 'Monday 07/10/2020', description: 'Leg Day'   },
    { day: 'Tuesday 07/11/2020', description: 'Arms Day'   },
    { day: 'Wednesday 07/12/2020', description: 'Rest Day'   },
    { day: 'Thursday 07/13/2020', description: 'Cardio Day'   },
    { day: 'Friday 07/14/2020', description: 'Back Day'   },
    { day: 'Saturday 07/15/2020', description: 'Rest Day'   },
    { day: 'Sunday 07/16/2020', description: 'Abs Day'   }
])

Goal.create([
    { activity: 'Barbell Squat', description: '4 sets, 10 reps',  exercise_id: "0"  },
    { activity: 'Leg Press', description: '4 sets, 6 reps',  exercise_id: "0"  },
    { activity: 'Dumbbell Walking Lunge', description: '3 sets, 10 steps each side',  exercise_id: "0" },
    { activity: 'Leg extensions', description: '3 sets, 8 reps',  exercise_id: "0"  },
    { activity: 'Lying Leg Curls', description: '3 sets, 8 reps',  exercise_id: "0"  },
    { activity: 'Close-grip bench press', description: '3 sets, 4 reps',  exercise_id: "1"  },
    { activity: 'Feet-elevated bench dip', description: '3 sets, 6 reps ',  exercise_id: "1"  },
    { activity: 'EZ-Bar Curl', description: '3 sets, 8 steps each side',  exercise_id: "1" },
    { activity: 'Close-grip bench press', description: '3 sets, 6 reps',  exercise_id: "1"  },
    { activity: 'Barbell Curl', description: '3 sets, 4 reps',  exercise_id: "1"  },
    { activity: 'Hatha Flow Yoga', description: '60 minutes',  exercise_id: "2"  },
    { activity: 'Full body Stretch', description: '30 minutes',  exercise_id: "2"  },
    { activity: 'Mind-Soul meditation', description: '30 minutes',  exercise_id: "2" },
    { activity: 'Running', description: '40 minutes on tredmill',  exercise_id: "3"  },
    { activity: 'Basketball', description: '30 minutes with Jim',  exercise_id: "3"  },
    { activity: 'HITT workout routine', description: 'https://www.youtube.com/watch?v=Mvo2snJGhtM',  exercise_id: "3" },
    { activity: 'Band Bent-Over Row', description: '4 sets, 10 reps ',  exercise_id: "4"  },
    { activity: 'Renegade Row', description: '3 sets, 10 reps',  exercise_id: "4"  },
    { activity: 'Wide dumbbell row', description: '3 sets, 12 reps',  exercise_id: "4" },
    { activity: 'Quadruped dumbbell row', description: '3 sets, 12 reps',  exercise_id: "4"  },
    { activity: 'Hatha Flow Yoga', description: '60 minutes',  exercise_id: "5"  },
    { activity: 'Full body Stretch', description: '30 minutes',  exercise_id: "5"  },
    { activity: 'Mind-Soul meditation', description: '30 minutes',  exercise_id: "5" },
    { activity: 'Hardstyle plank', description: '4 sets, 20 seconds each',  exercise_id: "6"  },
    { activity: 'Dumbbell side bend', description: '3 sets, 20 reps ',  exercise_id: "6"  },
    { activity: 'Bird dog', description: ' 3 sets, 6 reps each side',  exercise_id: "6" },
    { activity: 'Hollow extension-to-cannonball', description: '3 sets, 5 reps, hold for 5 seconds before curling up again',  exercise_id: "6"  },
    { activity: 'Dead Bug', description: '3 sets, 5 reps, hold for 5 seconds before curling up again',  exercise_id: "6"  }
])