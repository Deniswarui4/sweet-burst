"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { addMilestone, toggleMilestone } from "@/app/dashboard/actions"
import { Plus, Calendar, CheckCircle2, Circle } from "lucide-react"
import type { EventMilestone } from "@/lib/db"
import { useState } from "react"
import { useFormStatus } from "react-dom"

function AddMilestoneButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Adding..." : "Add Milestone"}
    </Button>
  )
}

interface MilestoneManagementProps {
  eventId: number
  milestones: EventMilestone[]
}

export function MilestoneManagement({ eventId, milestones }: MilestoneManagementProps) {
  const [showAddForm, setShowAddForm] = useState(false)

  const handleToggleMilestone = async (milestoneId: number, completed: boolean) => {
    await toggleMilestone(milestoneId, completed)
  }

  const completedCount = milestones.filter((m) => m.completed).length
  const totalCount = milestones.length
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Event Milestones</CardTitle>
          {totalCount > 0 && (
            <p className="text-sm text-gray-600">
              {completedCount} of {totalCount} completed ({progress.toFixed(0)}%)
            </p>
          )}
        </div>
        <Button size="sm" onClick={() => setShowAddForm(!showAddForm)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Milestone
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Progress Bar */}
        {totalCount > 0 && (
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* Add Milestone Form */}
        {showAddForm && (
          <form action={addMilestone} className="space-y-4 p-4 bg-gray-50 rounded-lg">
            <input type="hidden" name="eventId" value={eventId} />

            <div>
              <Label htmlFor="title">Milestone Title</Label>
              <Input id="title" name="title" placeholder="e.g., Venue booking confirmed" required />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name="description" placeholder="Additional details..." rows={2} />
            </div>

            <div>
              <Label htmlFor="dueDate">Due Date</Label>
              <Input id="dueDate" name="dueDate" type="date" />
            </div>

            <div className="flex space-x-2">
              <AddMilestoneButton />
              <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                Cancel
              </Button>
            </div>
          </form>
        )}

        {/* Milestones List */}
        <div className="space-y-3">
          {milestones.length > 0 ? (
            milestones.map((milestone) => (
              <div key={milestone.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                <button onClick={() => handleToggleMilestone(milestone.id, !milestone.completed)} className="mt-1">
                  {milestone.completed ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  ) : (
                    <Circle className="h-5 w-5 text-gray-400" />
                  )}
                </button>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className={`font-medium text-sm ${milestone.completed ? "line-through text-gray-500" : ""}`}>
                      {milestone.title}
                    </h4>
                    {milestone.completed && (
                      <Badge variant="default" className="ml-2">
                        Completed
                      </Badge>
                    )}
                  </div>

                  {milestone.description && (
                    <p className={`text-xs text-gray-600 mt-1 ${milestone.completed ? "line-through" : ""}`}>
                      {milestone.description}
                    </p>
                  )}

                  {milestone.due_date && (
                    <div className="flex items-center space-x-1 mt-2">
                      <Calendar className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-500">
                        Due: {new Date(milestone.due_date).toLocaleDateString()}
                      </span>
                    </div>
                  )}

                  {milestone.completed && milestone.completed_at && (
                    <p className="text-xs text-green-600 mt-1">
                      Completed: {new Date(milestone.completed_at).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm text-center py-4">No milestones added yet</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
