import { TitleForm } from "../TitleForm"
import { FieldSet } from "../FieldSet"
import { FieldInput } from "../FieldInput"
import { Label } from "../Label"
import { Button } from "../Button"

import "./form-events.styles.css"
import { SelectList } from "../SelectList"


export function FormEvents({ themes, whenSubmitted }) {

    function handleEventSubmit(formData) {
        console.log("Event created!", formData)

        const event =
        {
            folder: formData.get('eventImage'),
            theme: themes.find(function (item) {
                return item.id == formData.get('theme')
            }),
            date: new Date(formData.get('dateEvent')),
            title: formData.get('nameEvent')
        }


        whenSubmitted(event)
    }

    return (
        <form className="form-event" action={handleEventSubmit}>
            <TitleForm>Fill in to create an event:</TitleForm>

            <div className="fields-area">
                <FieldSet>
                    <Label htmlFor="nameEvent">
                        What is the name of the event?
                    </Label>
                    <FieldInput
                        type="text"
                        id="nameEvent"
                        placeholder="Summer dev hits"
                        name="nameEvent"
                    />
                </FieldSet>

                <FieldSet>
                    <Label htmlFor="eventImage">
                        What is the image URL for the event?
                    </Label>
                    <FieldInput
                        type="text"
                        id="eventImage"
                        placeholder="https://..."
                        name="eventImage"
                    />
                </FieldSet>

                <FieldSet>
                    <Label htmlFor="dateEvent">
                        Date of the event:
                    </Label>
                    <FieldInput
                        type="date"
                        id="dateEvent"
                        name="dateEvent"
                    />
                </FieldSet>

                <FieldSet>
                    <Label htmlFor="theme">
                        Event theme:
                    </Label>
                    <SelectList id="theme" name="theme" items={themes}></SelectList>
                </FieldSet>

                <div className="action-button">
                    <Button>
                        Create event
                    </Button>
                </div>
            </div>
        </form>
    )
}