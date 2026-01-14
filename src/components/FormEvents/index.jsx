import { TitleForm } from "../TitleForm"
import { FieldSet } from "../FieldSet"
import { FieldInput } from "../FieldInput"
import { Label } from "../Label"
import { Button } from "../Button"

import "./form-events.styles.css"
import { SelectList } from "../SelectList"


export function FormEvents() {
    return (
        <form className="form-event">
            <TitleForm>Preencha para criar um evento:</TitleForm>

            <div className="fields-area">
                <FieldSet>
                    <Label htmlFor="nome">
                        Qual o nome do evento?
                    </Label>
                    <FieldInput
                        type="text"
                        id="nome"
                        placeholder="Summer dev hits"
                        name="nomeEvento"
                    />
                </FieldSet>
                <FieldSet>
                    <Label htmlFor="dataEvent">
                        Data do evento:
                    </Label>
                    <FieldInput
                        type="date"
                        id="dataEvent"
                        name="dataEvent"
                    />
                </FieldSet>

                <FieldSet>
                    <Label htmlFor="dataEvent">
                        Tema do evento:
                    </Label>
                    <SelectList></SelectList>
                </FieldSet>

                <div className="action-button">
                    <Button>
                        Criar evento
                    </Button>
                </div>
            </div>
        </form>
    )
}