import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import '../../css/login.css';
import gymImage from '../../../../public/images/centros/atletismo.jpg';
import registroCandado from '../../../../public/images/otros/icono-olvidada.svg';
import registroRegistrarse from '../../../../public/images/otros/icono-registrarse.svg';

type Props = {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
};

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: Props) {
    return (
        <>
            <Head title="Log in" />

            <div className="login-page">
                <div className="login-card">
                    <div className="login-card__image-col">
                        <img
                            src={gymImage}
                            alt=""
                            className="login-card__image"
                        />
                    </div>

                    <div className="login-card__form-col">
                        <Form
                            {...store.form()}
                            resetOnSuccess={['password']}
                            className="login-form"
                        >
                            {({ processing, errors }) => (
                                <>
                                    <div className="login-form__contenedor">
                                        <div className="login-form__contenido">
                                            <Label className="login-form__label__socio">
                                                Acceso socios
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                name="email"
                                                required
                                                autoFocus
                                                tabIndex={1}
                                                autoComplete="email"
                                                placeholder="Correo electrónico"
                                                className="login-form__input"
                                            />
                                            <InputError
                                                message={errors.email}
                                            />
                                        </div>

                                        <div className="login-form__contenido">
                                            <Input
                                                id="password"
                                                type="password"
                                                name="password"
                                                required
                                                tabIndex={2}
                                                autoComplete="current-password"
                                                placeholder="Contraseña"
                                                className="login-form__input"
                                            />
                                            <InputError
                                                message={errors.password}
                                            />
                                        </div>

                                        <div className="login-form__remember">
                                            <input
                                                type="checkbox"
                                                id="remember"
                                                name="remember"
                                                tabIndex={3}
                                                className="checkbox-input"
                                            />
                                            <Label
                                                htmlFor="remember"
                                                className="checkbox-label"
                                            >
                                                <span className="checkbox-box"></span>
                                                Recordar Contraseña
                                            </Label>
                                        </div>

                                        <Button
                                            type="submit"
                                            className="login-form__submit-btn"
                                            tabIndex={4}
                                            disabled={processing}
                                        >
                                            {processing && <Spinner />}
                                            Iniciar sesión
                                        </Button>
                                    </div>

                                    <div className="footer__barra_inferior"></div>
                                    <div className="login-form__footer-links">
                                        {canRegister && (
                                            <TextLink
                                                href="/register"
                                                tabIndex={5}
                                                className="login-form__footer-link"
                                            >
                                                <img
                                                    src={registroRegistrarse}
                                                    alt="Icono registro"
                                                    className="login-form__footer-icon"
                                                />
                                                ¿Ya eres socio pero no estas
                                                registrado?
                                            </TextLink>
                                        )}

                                        {canResetPassword && (
                                            <TextLink
                                                href="/forgot-password"
                                                tabIndex={6}
                                                className="login-form__footer-link"
                                            >
                                                <img
                                                    src={registroCandado}
                                                    alt="Icono registro"
                                                    className="login-form__footer-icon"
                                                />
                                                ¿Olvidaste tu contraseña?
                                            </TextLink>
                                        )}
                                    </div>
                                </>
                            )}
                        </Form>

                        {status && (
                            <div className="login-form__status">{status}</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
