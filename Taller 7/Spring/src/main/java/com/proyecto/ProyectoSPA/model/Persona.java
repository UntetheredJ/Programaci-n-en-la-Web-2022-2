package com.proyecto.ProyectoSPA.model;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name="personas")
public class Persona{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name="nombres", nullable=false)
	private String nombres;
	@Column(name="apellidos", nullable=false)
	private String apellidos;
	@Column(name="idTipoDocumento", nullable=false)
	private long idTipoDocumento;
	@Column(name="documento", nullable=false)
	private String documento;
	@Column(name="idCiudad", nullable=false)
	private long idCiudad;
	@Column(name="fechaNacimiento", nullable=false)
	private Date fechaNacimiento;
	@Column(name="email", nullable=false)
	private String email;
	@Column(name="telefono", nullable=false)
	private long telefono;
	@Column(name="usuario", nullable=false)
	private String usuario;
	@Column(name="password", nullable=false)
	private String password;
	
	public Persona() {
		
	}
	
	public Persona(String nombres, String apellidos, long idTipoDocumento, String documento, long idCiudad, Date fechanacimiento, String email, long telefono, String usuario, String password) {
		this.nombres = nombres;
		this.apellidos = apellidos;
		this.idTipoDocumento = idTipoDocumento;
		this.documento = documento;
		this.idCiudad = idCiudad;
		this.fechaNacimiento = fechaNacimiento;
		this.email = email;
		this.telefono = telefono;
		this.usuario = usuario;
		this.password = password;
	}
	
	// Id
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	// Nombres
	public String getNombres() {
		return nombres;
	}
	
	public void setNombres(String nombres) {
		this.nombres = nombres;
	}
	
	// Apellidos
	public String getApellidos() {
		return apellidos;
	}
		
	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}
	
	
	// Idtipodocumento
	public long getIdTipoDocumento() {
		return idTipoDocumento;
	}
		
	public void setIdTipoDocumento(long idTipoDocumento) {
		this.idTipoDocumento = idTipoDocumento;
	}
	
	// Documento
	public String getDocumento() {
		return documento;
	}
		
	public void setDocumento(String documento) {
		this.documento = documento;
	}
	
	// Ciudad
	public long getIdCiudad() {
		return idCiudad;
	}
		
	public void setIdCiudad(long idCiudad) {
		this.idCiudad = idCiudad;
	}
	
	// Fecha Nacimiento
	public Date getFechaNacimiento() {
		return fechaNacimiento;
	}
		
	public void setFechaNacimiento(Date fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}
	
	// Email
	public String getEmail() {
		return email;
	}
		
	public void setEmail(String email) {
		this.email = email;
	}
	
	// Telefono
	public long getTelefono() {
		return telefono;
	}
		
	public void setTelefono(long telefono) {
		this.telefono = telefono;
	}
	
	// Usuario
	public String getUsuario() {
		return usuario;
	}
	
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	
	// Password
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
}