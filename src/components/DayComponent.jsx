// import React, { useState } from "react";
// import { ChevronDown, ChevronRight, Plus, Pencil, Trash2 } from "lucide-react";

// export default function DayComponent({ day, data, onUpdate, onBack }) {
//   const [dietOpen, setDietOpen] = useState(false);
//   const [workoutOpen, setWorkoutOpen] = useState(false);

//   // -------- Diet Handlers ----------
//   const toggleDietItem = (id) => {
//     const updated = {
//       ...data,
//       diet: data.diet.map((item) =>
//         item.id === id ? { ...item, done: !item.done } : item
//       ),
//     };
//     onUpdate(updated);
//   };

//   const toggleAllDiet = (checked) => {
//     onUpdate({
//       ...data,
//       diet: data.diet.map((item) => ({ ...item, done: checked })),
//     });
//   };

//   const addDietItem = () => {
//     const newId = Date.now();
//     onUpdate({
//       ...data,
//       diet: [
//         ...data.diet,
//         {
//           id: newId,
//           name: "New Item",
//           protein: 0,
//           carbs: 0,
//           fats: 0,
//           qty: 0,
//           unit: "unit",
//           done: false,
//         },
//       ],
//     });
//   };

//   const editDietItem = (id, field, value) => {
//     onUpdate({
//       ...data,
//       diet: data.diet.map((item) =>
//         item.id === id ? { ...item, [field]: value } : item
//       ),
//     });
//   };

//   const deleteDietItem = (id) => {
//     onUpdate({
//       ...data,
//       diet: data.diet.filter((item) => item.id !== id),
//     });
//   };

//   // -------- Steps Handler ----------
//   const toggleSteps = () => {
//     onUpdate({ ...data, steps: !data.steps });
//   };

//   // -------- Workout Handlers ----------
//   const toggleWorkoutSet = (exId, setIdx) => {
//     onUpdate({
//       ...data,
//       workout: data.workout.map((ex) =>
//         ex.id === exId
//           ? {
//               ...ex,
//               sets: ex.sets.map((s, i) =>
//                 i === setIdx ? { ...s, done: !s.done } : s
//               ),
//             }
//           : ex
//       ),
//     });
//   };

//   const toggleAllWorkout = (checked) => {
//     onUpdate({
//       ...data,
//       workout: data.workout.map((ex) => ({
//         ...ex,
//         sets: ex.sets.map((s) => ({ ...s, done: checked })),
//       })),
//     });
//   };

//   const addWorkoutExercise = () => {
//     const newId = Date.now();
//     onUpdate({
//       ...data,
//       workout: [...data.workout, { id: newId, name: "New Exercise", sets: [] }],
//     });
//   };

//   const addWorkoutSet = (id) => {
//     onUpdate({
//       ...data,
//       workout: data.workout.map((ex) =>
//         ex.id === id
//           ? { ...ex, sets: [...ex.sets, { weight: 0, reps: 0, done: false }] }
//           : ex
//       ),
//     });
//   };

//   const editWorkoutSet = (exId, setIdx, field, value) => {
//     onUpdate({
//       ...data,
//       workout: data.workout.map((ex) =>
//         ex.id === exId
//           ? {
//               ...ex,
//               sets: ex.sets.map((s, i) =>
//                 i === setIdx ? { ...s, [field]: value } : s
//               ),
//             }
//           : ex
//       ),
//     });
//   };

//   const deleteWorkoutSet = (exId, setIdx) => {
//     onUpdate({
//       ...data,
//       workout: data.workout.map((ex) =>
//         ex.id === exId
//           ? { ...ex, sets: ex.sets.filter((_, i) => i !== setIdx) }
//           : ex
//       ),
//     });
//   };

//   return (
//     <div className="mb-6 border rounded-2xl shadow p-4">
//       {/* Header */}
//       <div className="flex items-center mb-2">
//         {onBack && (
//           <button onClick={onBack} className="mr-2 text-gray-600 hover:text-black">
//             <ChevronRight className="transform rotate-180 inline-block" />
//           </button>
//         )}
//         <h2 className="text-xl font-semibold">{day}</h2>
//       </div>

//       {/* Diet Section */}
//       <div className="mb-4">
//         <button
//           onClick={() => setDietOpen(!dietOpen)}
//           className="flex justify-between items-center w-full text-lg font-semibold"
//         >
//           <span>Diet</span>
//           <span className="flex items-center">
//           <th className="p-2">
//             <input
//               type="checkbox"
//               className="w-5 h-5"
//               onChange={(e) => toggleAllDiet(e.target.checked)}
//             />
//           </th>
//           {dietOpen ? <ChevronDown /> : <ChevronRight />}
//           </span>
//         </button>
//         {dietOpen && (
//           <div className="mt-3 overflow-x-auto">
//             <table className="w-full border-collapse text-sm text-center">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="p-2">Item</th>
//                   <th className="p-2">Protein</th>
//                   <th className="p-2">Carbs</th>
//                   <th className="p-2">Fats</th>
//                   <th className="p-2">Qty</th>
//                   <th className="p-2">Unit</th>
//                   <th className="p-2">Tick</th>
//                   <th className="p-2">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.diet.map((item, idx) => (
//                   <tr key={item.id || idx} className="border-t">
//                     <td className="p-2">
//                       <input
//                         value={item.name}
//                         onChange={(e) => editDietItem(item.id, "name", e.target.value)}
//                         className="border px-1 w-full"
//                       />
//                     </td>
//                     <td className="p-2">
//                       <input
//                         type="number"
//                         value={item.protein}
//                         onChange={(e) =>
//                           editDietItem(item.id, "protein", Number(e.target.value))
//                         }
//                         className="border px-1 w-16"
//                       />
//                     </td>
//                     <td className="p-2">
//                       <input
//                         type="number"
//                         value={item.carbs}
//                         onChange={(e) =>
//                           editDietItem(item.id, "carbs", Number(e.target.value))
//                         }
//                         className="border px-1 w-16"
//                       />
//                     </td>
//                     <td className="p-2">
//                       <input
//                         type="number"
//                         value={item.fats}
//                         onChange={(e) =>
//                           editDietItem(item.id, "fats", Number(e.target.value))
//                         }
//                         className="border px-1 w-16"
//                       />
//                     </td>
//                     <td className="p-2">
//                       <input
//                         type="number"
//                         value={item.qty}
//                         onChange={(e) =>
//                           editDietItem(item.id, "qty", Number(e.target.value))
//                         }
//                         className="border px-1 w-16"
//                       />
//                     </td>
//                     <td className="p-2">
//                       <input
//                         value={item.unit}
//                         onChange={(e) => editDietItem(item.id, "unit", e.target.value)}
//                         className="border px-1 w-12"
//                       />
//                     </td>
//                     <td className="p-2">
//                       <input
//                         type="checkbox"
//                         checked={item.done}
//                         onChange={() => toggleDietItem(item.id)}
//                       />
//                     </td>
//                     <td className="p-2 flex gap-2 justify-center">
//                       <Pencil className="w-4 h-4 text-blue-600 cursor-pointer" />
//                       <Trash2
//                         className="w-4 h-4 text-red-600 cursor-pointer"
//                         onClick={() => deleteDietItem(item.id)}
//                       />
//                     </td>
//                   </tr>
//                 ))}

//                 {/* --- Totals Row --- */}
//                 <tr className="bg-gray-200 font-semibold border-t">
//                   <td className="p-2 text-right">Total:</td>
//                   <td className="p-2">
//                     {data.diet.reduce((sum, i) => sum + (i.protein || 0), 0)}
//                   </td>
//                   <td className="p-2">
//                     {data.diet.reduce((sum, i) => sum + (i.carbs || 0), 0)}
//                   </td>
//                   <td className="p-2">
//                     {data.diet.reduce((sum, i) => sum + (i.fats || 0), 0)}
//                   </td>
//                   <td className="p-2" colSpan={4}></td>
//                 </tr>
//               </tbody>
//             </table>

//             <button
//               onClick={addDietItem}
//               className="mt-2 flex items-center gap-2 text-blue-600 text-sm font-medium"
//             >
//               <Plus className="w-4 h-4" /> Add Item
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Steps Section */}
//       <div className="mb-4 flex justify-between items-center">
//         <span className="text-lg font-semibold">10K Steps</span>
//         <input
//           type="checkbox"
//           checked={data.steps}
//           onChange={toggleSteps}
//           className="w-5 h-5"
//         />
//       </div>

//       {/* Workout Section */}
//       <div>
//         <button
//           onClick={() => setWorkoutOpen(!workoutOpen)}
//           className="flex justify-between items-center w-full text-lg font-semibold"
//         >
//           <span>Workout</span>
//           <span className="flex items-center">
//           <th className="p-2">
//             <input
//               type="checkbox"
//               className="w-5 h-5"
//               onChange={(e) => toggleAllWorkout(e.target.checked)}
//             />
//           </th>
//           {workoutOpen ? <ChevronDown /> : <ChevronRight />}
//           </span>
//         </button>
//         {workoutOpen && (
//           <div className="mt-3">
//             {data.workout.map((ex, exIdx) => (
//               <div key={ex.id || exIdx} className="mb-4">
//                 <div className="font-medium mb-2">{ex.name}</div>
//                 <table className="w-full border-collapse text-sm text-center">
//                   <thead>
//                     <tr className="bg-gray-100">
//                       <th className="p-2">Weight</th>
//                       <th className="p-2">Reps</th>
//                       <th className="p-2">Tick</th>
//                       <th className="p-2">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {ex.sets.map((set, setIdx) => (
//                       <tr key={setIdx} className="border-t">
//                         <td className="p-2">
//                           <input
//                             type="number"
//                             value={set.weight}
//                             onChange={(e) =>
//                               editWorkoutSet(ex.id, setIdx, "weight", Number(e.target.value))
//                             }
//                             className="border px-1 w-20"
//                           />
//                         </td>
//                         <td className="p-2">
//                           <input
//                             type="number"
//                             value={set.reps}
//                             onChange={(e) =>
//                               editWorkoutSet(ex.id, setIdx, "reps", Number(e.target.value))
//                             }
//                             className="border px-1 w-20"
//                           />
//                         </td>
//                         <td className="p-2">
//                           <input
//                             type="checkbox"
//                             checked={set.done}
//                             onChange={() => toggleWorkoutSet(ex.id, setIdx)}
//                           />
//                         </td>
//                         <td className="p-2 flex gap-2 justify-center">
//                           <Pencil className="w-4 h-4 text-blue-600 cursor-pointer" />
//                           <Trash2
//                             className="w-4 h-4 text-red-600 cursor-pointer"
//                             onClick={() => deleteWorkoutSet(ex.id, setIdx)}
//                           />
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//                 <button
//                   onClick={() => addWorkoutSet(ex.id)}
//                   className="mt-1 text-xs text-blue-600"
//                 >
//                   + Add Set
//                 </button>
//               </div>
//             ))}
//             <button
//               onClick={addWorkoutExercise}
//               className="mt-2 flex items-center gap-2 text-blue-600 text-sm font-medium"
//             >
//               <Plus className="w-4 h-4" /> Add Exercise
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { fetchTemplate, fetchDayData, saveDayData } from "./storageUtils";

export default function DayComponent({ date }) {
  const [dayData, setDayData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      // Try today’s JSON first
      let data = await fetchDayData(date);
      if (!data) {
        // fallback to template.json
        data = await fetchTemplate();
      }
      setDayData(data);
      setLoading(false);
    };
    loadData();
  }, [date]);

  const handleChange = (field, value) => {
    setDayData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    await saveDayData(date, dayData);
    alert(`Saved ${date}.json to Appwrite!`);
  };

  if (loading) return <p>Loading {date}...</p>;
  if (!dayData) return <p>No data available.</p>;

  return (
    <div className="day">
      <h3>{date}</h3>

      <label>
        Sets:
        <input
          type="number"
          value={dayData.sets || ""}
          onChange={(e) => handleChange("sets", e.target.value)}
        />
      </label>

      <label>
        Reps:
        <input
          type="number"
          value={dayData.reps || ""}
          onChange={(e) => handleChange("reps", e.target.value)}
        />
      </label>

      <label>
        Diet:
        <input
          type="text"
          value={dayData.diet || ""}
          onChange={(e) => handleChange("diet", e.target.value)}
        />
      </label>

      <button onClick={handleSave}>Save {date}</button>
    </div>
  );
}
