import { TitleForm } from "../TitleForm"
import { FieldSet } from "../FieldSet"
import { FieldInput } from "../FieldInput"
import { Label } from "../Label"
import { Button } from "../Button"

import "./form-events.styles.css"
import { SelectList } from "../SelectList"


export function FormEvents({ themes }) {
    return (
        <form className="form-event">
            <TitleForm>Fill in to create an event:</TitleForm>

            <div className="fields-area">
                <FieldSet>
                    <Label htmlFor="nome">
                        What is the name of the event?
                    </Label>
                    <FieldInput
                        type="text"
                        id="nome"
                        placeholder="Summer dev hits"
                        name="nomeEvento"
                    />
                </FieldSet>

                <FieldSet>
                    <Label htmlFor="nome">
                        What is the image URL for the event?
                    </Label>
                    <FieldInput
                        type="text"
                        id="nome"
                        placeholder="https://..."
                        name="nomeEvento"
                    />
                </FieldSet>

                <FieldSet>
                    <Label htmlFor="dataEvent">
                        Date of the event:
                    </Label>
                    <FieldInput
                        type="date"
                        id="dataEvent"
                        name="dataEvent"
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